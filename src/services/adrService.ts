import { Adr } from "../entities/Adr";
import { adrRepository } from "../repository/adrRepository";
import { AdrMapper } from "../Utils/adrMapper";
import * as vscode from 'vscode';
import { existeDiretorio, getAdrDiretorio, getTemplateDiretorio } from "./inicializarService";
import { cleanFileName, getWorkspaceRootPath, readMarkdownFile } from "../Utils/utils";
import { templateRepository } from '../repository/templateRepository';


export async function getAdrs() {
    const repository = await getAdrRepository();
    const adrsPrisma = await repository.findAll();
    const adrs = AdrMapper.toDomainList(adrsPrisma);

    return adrs;
}

export async function getAdrById(adrId: number): Promise<Adr | undefined>{
    const repository = await getAdrRepository();
    const adrPrisma = await repository.findById(adrId);
    if(!adrPrisma){
        vscode.window.showErrorMessage(`ADR com id ${adrId} não foi encontrado`);
        return undefined;
    }

    const categoria = AdrMapper.toDomain(adrPrisma);

    return categoria;
}

export async function createADR(titulo: string, templateId: number) {
    const root = getWorkspaceRootPath();
    if (!root) {
        vscode.window.showErrorMessage("Nenhum workspace aberto.");
        return undefined;
    }

    const adrFolder = vscode.Uri.joinPath(root.uri, getAdrDiretorio());

    const id = await getNextAdrId(adrFolder);
    if (!id) {
        vscode.window.showErrorMessage("Erro ao gerar próximo ID do ADR.");
        return undefined;
    }
    const templateContent = await loadTemplate(templateId, root.uri);
    if (!templateContent) {
        return undefined;
    }

    const adrContent = generateAdrContent(templateContent, titulo);

    const adrRepository = await getAdrRepository();
    let adr;
    try {
        adr = await adrRepository.create({ id, nome: titulo, templateId });
    } catch (error) {
        vscode.window.showErrorMessage(`Erro ao salvar ADR no banco: ${String(error)}`);
        return undefined;
    }

    try {
        const fileUri = await saveAdrFile(adrFolder, id, titulo, adrContent);
        vscode.window.showInformationMessage(`ADR "${titulo}" criado com sucesso.`);
        return {adr, fileUri};
    } catch (error) {
        await adrRepository.deleteById(id);
        vscode.window.showErrorMessage(`Erro ao gravar arquivo do ADR: ${String(error)}`);
        return undefined;
    }
}

async function loadTemplate(templateId: number, rootUri: vscode.Uri): Promise<string | undefined> {
    const templateRepository = await getTemplateRepository();
    const template = await templateRepository.findById(templateId);

    if (!template) {
        vscode.window.showErrorMessage(`Template ${templateId} não encontrado no banco.`);
        return undefined;
    }

    const templateFolder = vscode.Uri.joinPath(rootUri, getTemplateDiretorio());
    if (!await existeDiretorio(templateFolder)) {
        vscode.window.showErrorMessage("Diretório de templates não existe.");
        return undefined;
    }

    const templateFile = vscode.Uri.joinPath(templateFolder, `${template.nome}.md`);
    
    const templateContent = await readMarkdownFile(templateFile, `Arquivo de template ${template.nome}.md não encontrado.`);
}

function generateAdrContent(templateContent: string, titulo: string): string {
    return templateContent.replace(/^#\s.+/m, `# ${titulo}`);
}

async function saveAdrFile(folder: vscode.Uri, id: number, titulo: string, content: string) {
    const fileName = `${id}-${cleanFileName(titulo)}.md`;
    const fileUri = vscode.Uri.joinPath(folder, fileName);
    await vscode.workspace.fs.writeFile(fileUri, Buffer.from(content, "utf8"));

    return fileUri;
}

export async function getNextAdrId(adrFolder: vscode.Uri): Promise<number | undefined>{
    try {
        if(await existeDiretorio(adrFolder)){
            const files = await vscode.workspace.fs.readDirectory(adrFolder);

            const ids = files.filter(([name, type]) => type === vscode.FileType.File && name.endsWith(".md"))
                .map(([name]) => {
                    const match = name.match(/^(\d+)-/);
                    return match ? parseInt(match[1], 10) : NaN;
                }).filter((n) => !isNaN(n));

            if(ids.length === 0 ){
                return 1;
            }

            return Math.max(...ids) + 1;
        }
    } catch (error) {
        return undefined;
    }
}

export async function getAdrFileUri(adrId: number){
    const root = getWorkspaceRootPath();
    if (!root) {
        vscode.window.showErrorMessage("Nenhum workspace aberto.");
        return undefined;
    }

    const adrFolder = vscode.Uri.joinPath(root.uri, getAdrDiretorio());

    try {
        if (!(await existeDiretorio(adrFolder))) {
            vscode.window.showErrorMessage("Diretório de ADRs não existe.");
            return undefined;
        }

        const files = await vscode.workspace.fs.readDirectory(adrFolder);

        for (const [name, type] of files) {
            if (type === vscode.FileType.File && name.endsWith(".md")) {
                const match = name.match(/^(\d+)-/);
                if (match && parseInt(match[1], 10) === adrId) {
                    return vscode.Uri.joinPath(adrFolder, name);
                }
            }
        }

        vscode.window.showErrorMessage(`Arquivo do ADR ${adrId} não encontrado.`);
        return undefined;

    } catch (error) {
        vscode.window.showErrorMessage(`Erro ao buscar arquivo do ADR ${adrId}: ${String(error)}`);
        return undefined;
    }
}

async function getAdrRepository(){
    return new adrRepository();
}

async function getTemplateRepository(){
    return new templateRepository();
}