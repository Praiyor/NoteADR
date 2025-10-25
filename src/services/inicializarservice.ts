import * as vscode from 'vscode';
import { getWorkspaceRootPath } from '../Utils/utils';
import { Database } from '../repository/Database';


export async function inicializarNodeAdr(context: vscode.ExtensionContext): Promise<void>{
    const root = getWorkspaceRootPath();

    if(!root){
        return;
    }

    const adrDiretorio = vscode.Uri.joinPath(root.uri, getAdrDiretorio());
    const templateDiretorio = vscode.Uri.joinPath(root.uri, getTemplateDiretorio());
    const templateFile = vscode.Uri.joinPath(templateDiretorio, "decision-record.md");

    if (!await existeDiretorio(adrDiretorio)) {
        await criarDiretorio(adrDiretorio);
    }

    if (!await existeDiretorio(templateDiretorio)) {
        await criarDiretorio(templateDiretorio);
    }

        if (!await existeArquivo(templateFile)) {
        await createTemplate(context, templateDiretorio);
    }

    const db = Database.getInstance();
    const dbDir = db.getDatabaseConfig();
    if(!await existeArquivo(vscode.Uri.joinPath(root.uri, dbDir, "extension.db"))){
        await db.initDatabase();
    }

    vscode.window.showInformationMessage(`noteADR iniciado!`);
}

async function createTemplate(context: vscode.ExtensionContext, uri:vscode.Uri){
    const templatePath = vscode.Uri.joinPath(vscode.Uri.file(context.extensionPath), "resources", "template.md");
    const template = await vscode.workspace.fs.readFile(templatePath);

    const destination = vscode.Uri.joinPath(uri, "decision-record.md");

    await vscode.workspace.fs.writeFile(destination, template);
}

export function getAdrDiretorio(): string {
    return vscode.workspace.getConfiguration().get('noteadr.adrDiretorio') ?? 'docs/adr';
}

export function getTemplateDiretorio(): string {
    return vscode.workspace.getConfiguration().get('noteadr.templateDiretorio') ?? 'docs/templates';
}

export async function existeDiretorio(uri:vscode.Uri): Promise<boolean> {
    try {
        const stat = await vscode.workspace.fs.stat(uri);

        return stat.type === vscode.FileType.Directory;
    } catch (error) {
        return false;
    }
}

export async function existeArquivo(uri:vscode.Uri): Promise<boolean> {
    try {
    const stat = await vscode.workspace.fs.stat(uri);
    
    return stat.type === vscode.FileType.File;
  } catch (error) {
    return false;
  }
}

async function criarDiretorio(uri:vscode.Uri): Promise<void> {
    await vscode.workspace.fs.createDirectory(uri);
}