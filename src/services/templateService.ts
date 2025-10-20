import { Field } from "../entities/Field";
import { Rule } from "../entities/Rule";
import { Template } from "../entities/Template";
import { Database } from "../repository/Database";
import { templateRepository } from "../repository/templateRepository";
import { TemplateMapper } from "../Utils/templateMapper";
import { getWorkspaceRootPath } from "../Utils/utils";
import { TemplateValidator } from "../validators/TemplateValidator";
import { createField} from "./fieldService";
import { getTemplateDiretorio } from "./inicializarService";
import { createRule } from "./ruleService";
import * as vscode from 'vscode';

export async function getTemplates(){
    const repository = await getTemplateRepository();
    const templatesPrisma = await repository.findAll();
    const templates = TemplateMapper.toDomainList(templatesPrisma);

    return templates;
}

export async function saveTemplate(nome: string, conteudo: string): Promise<boolean> {
    const prisma = Database.getInstance().getPrismaClient();
    const validator = new TemplateValidator();
    const { valido, campos, regras } = await validator.validate(nome, conteudo);

    if(!valido){
        return false;
    }

    nome = nome.replace(/\.md$/i, '');

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

async function getTemplateRepository(){
    return new templateRepository();
}