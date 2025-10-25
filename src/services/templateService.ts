import { Field } from "../entities/Field";
import { Rule } from "../entities/Rule";
import { Template } from "../entities/Template";
import { Database } from "../repository/Database";
import { templateRepository } from "../repository/templateRepository";
import { TemplateMapper } from "../Utils/templateMapper";
import { getWorkspaceRootPath } from "../Utils/utils";
import { TemplateValidator } from "../validators/TemplateValidator";
import { getAdrs } from "./adrService";
import { createField, updateFieldById} from "./fieldService";
import { existeDiretorio, getTemplateDiretorio } from "./inicializarService";
import { createRule, updateRuleById } from "./ruleService";
import * as vscode from 'vscode';

export async function getTemplates(){
    const repository = await getTemplateRepository();
    const templatesPrisma = await repository.findAll();
    const templates = TemplateMapper.toDomainList(templatesPrisma);

    return templates;
}

export async function getTemplatesForAdr(){
    const templatesBanco = await getTemplates();

    const root = getWorkspaceRootPath();
    if (!root) {
        vscode.window.showErrorMessage("Nenhum workspace aberto.");
        return [];
    }

    const templateDir = vscode.Uri.joinPath(root.uri, getTemplateDiretorio());

    if (!await existeDiretorio(templateDir)) {
        return [];
    }

    const arquivos = await vscode.workspace.fs.readDirectory(templateDir);
    const nomesArquivos = arquivos
        .filter(([name, type]) => type === vscode.FileType.File && name.endsWith(".md"))
        .map(([name]) => name.replace(/\.md$/i, ''));

    const templatesDisponiveis = templatesBanco.filter(template =>
        nomesArquivos.includes(template.getNome())
    );

    return templatesDisponiveis;
}

export async function saveTemplate(nome: string, conteudo: string): Promise<boolean> {
    const prisma = Database.getInstance().getPrismaClient();
    const validator = new TemplateValidator();
    const { valido, campos, regras } = await validator.validate(nome, conteudo);

    if(!valido){
        return false;
    }

    nome = nome.replace(/\.md$/i, '');

    const templates = await getTemplates();
    if (templates.some(t => t.getNome() === nome)) {
        vscode.window.showErrorMessage(`Já existe um template chamado "${nome}" no banco.`);
        return false;
    }

    const rule = new Rule(regras);
    const field = new Field(campos, rule);
    const template = new Template(nome, field);

    let filePath: vscode.Uri | undefined;

    const root = getWorkspaceRootPath();
    if (root) {
        const templateDir = vscode.Uri.joinPath(root.uri, getTemplateDiretorio());
        filePath = vscode.Uri.joinPath(templateDir, `${nome}.md`);

        try {
            await vscode.workspace.fs.stat(templateDir);
        } catch {
            await vscode.workspace.fs.createDirectory(templateDir);
        }

        const encoder = new TextEncoder();
        await vscode.workspace.fs.writeFile(filePath, encoder.encode(conteudo));

    } else {
        vscode.window.showErrorMessage("Nenhum workspace aberto para salvar o template.");
        return false;
    }
    try {
        await prisma.$transaction(async (tx) => {

            const savedRule = await createRule(regras, tx);
            rule.setId(savedRule.id);
            
            const savedField = await createField( { campos, ruleId: savedRule.id }, tx );
            field.setId(savedField.id);
            
            const savedTemplate = await tx.template.create({
                data: {
                    nome,
                    fieldId: savedField.id
                }
            });
            template.setId(savedTemplate.id);

        });
    } catch (error) {
        try {
            await vscode.workspace.fs.delete(filePath);
        } catch (fsErr) {
            vscode.window.showErrorMessage("Falha ao remover arquivo após erro no banco");
        }
        vscode.window.showErrorMessage("Erro ao salvar no banco");
        return false;
    }
    
    return true;
}

export async function deleteTemplateByFileName(fileName: string): Promise<void> {
    const nome = fileName.replace(/\.md$/i, '');
    const templates = await getTemplates();

    const templatesToDelete = templates.filter(t => t.getNome() === nome);

    if (templatesToDelete.length === 0) {
        vscode.window.showWarningMessage(`Nenhum template chamado "${nome}" encontrado no banco.`);
        return;
    }

    const repository = await getTemplateRepository();
    const adrs = await getAdrs();

    try {
        for (const template of templatesToDelete) {
            const id = template.getId();
            if (id === undefined) {
                continue;
            }

            const adrsUsandoTemplate = adrs.filter(adr => adr.getTemplate().getId() === id);
            if (adrsUsandoTemplate.length > 0) {
                vscode.window.showErrorMessage(`Não é possível deletar o template "${nome}" com id "${id}" do banco. Ele está sendo usado por ${adrsUsandoTemplate.length} ADR(s).`);
                continue;
            }
            
            await repository.deleteById(id);
        }

        const msg = templatesToDelete.length > 1
            ? `Foram deletados ${templatesToDelete.length} templates com o nome "${nome}".`
            : `Template "${nome}" deletado com sucesso.`;

        vscode.window.showInformationMessage(msg);

    } catch (error) {
        vscode.window.showErrorMessage(`Erro ao deletar template "${nome}"`);
    }
}

export async function atualizaTemplateByFileName(fileName: string){
    const nome = fileName.replace(/\.md$/i, '');
    const prisma = Database.getInstance().getPrismaClient();
    const repository = await getTemplateRepository();

    const templateExistente = (await repository.findAll()).find(t => t.nome === nome);

    if(!templateExistente){
        vscode.window.showWarningMessage(`Template "${nome}" não foi encontrado no banco para atualizar`);
        return;
    }

    const root = getWorkspaceRootPath();
    if (!root) {
        vscode.window.showErrorMessage("Nenhum workspace aberto para atualizar o template.");
        return;
    }

    const templateDir = vscode.Uri.joinPath(root.uri, getTemplateDiretorio());
    const filePath = vscode.Uri.joinPath(templateDir, `${nome}.md`);

    try {
        const conteudo = (await vscode.workspace.fs.readFile(filePath)).toString();
        const validator = new TemplateValidator();
        const { valido, campos, regras } = await validator.validate(`${nome}.md`, conteudo);

        if(!valido){
            vscode.window.showErrorMessage(`Template "${nome}" inválido. Atualização cancelada.`);
            return;
        }

        const fieldId = templateExistente.field.id;
        const ruleId = templateExistente.field.rule.id;

        await prisma.$transaction(async tx => {
          await updateRuleById(ruleId, {regras}, tx);
          await updateFieldById(fieldId, {campos}, tx);
        });

        vscode.window.showInformationMessage(`Template "${nome}" atualizado com sucesso no banco.`);
    } catch (error) {
        vscode.window.showErrorMessage(`Erro ao atualizar o template "${nome}": ${String(error)}`);
    }
}

async function getTemplateRepository(){
    return new templateRepository();
}