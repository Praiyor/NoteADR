import { Prisma, adr } from '@prisma/client';
import * as vscode from 'vscode';
import { getAdrDiretorio } from '../services/inicializarService';

export function getNonce() {
    let text = "";
    const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

export function isWorkspaceAberto(): boolean{
    return vscode.workspace.workspaceFolders !== undefined && vscode.workspace.workspaceFolders.length > 0;
}

export function getWorkspaceRootPath(): vscode.WorkspaceFolder | undefined {
    if(!isWorkspaceAberto()){
        vscode.window.showErrorMessage("Nenhum workspace aberto. Abra um workspace para iniciar a extensão");
        return undefined;
    }

    const folders = vscode.workspace.workspaceFolders;

    if(folders && folders.length > 1){
        vscode.window.showErrorMessage("Mais de um workspace aberto. Feche os workspaces e deixe apenas um aberto para iniciar a extensão");
        return undefined;
    }

    if(folders && folders.length > 0){
        return folders [0];
    }
}


export function safeStringify(obj: any) {
    const seen = new WeakSet();
    return JSON.stringify(obj, (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)){ return; }
        seen.add(value);
      }
      return value;
    });
}

export function cleanFileName(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-") 
    .replace(/^-+|-+$/g, ""); 
}

export async function readMarkdownFile(fileUri: vscode.Uri, notFoundMsg: string): Promise<string | undefined> {
    try {
        const content = await vscode.workspace.fs.readFile(fileUri);
        return Buffer.from(content).toString("utf8");
    } catch {
        vscode.window.showErrorMessage(notFoundMsg);
        return undefined;
    }
}

export async function validateAdrIds():Promise<void>{
    const root = getWorkspaceRootPath();

    if(!root){
        return;
    }

    const adrDir = vscode.Uri.joinPath(root.uri, getAdrDiretorio());

    try {
        const adrs = await vscode.workspace.fs.readDirectory(adrDir);
        const ids = new Map<number, string[]>();

        for(const [fileName, fileType] of adrs){
            if(fileType !== vscode.FileType.File || !fileName.endsWith('.md')){
                continue;
            }

            const match = fileName.match(/^(\d+)-/);
            if(!match){
                continue;
            }

            const id = Number(match[1]);

            if(!ids.has(id)){
                ids.set(id, [fileName]);
            } else {
                ids.get(id)?.push(fileName);
            }

            const duplicados = Array.from(ids.entries()).filter(([_, files]) => files.length > 1);

            if(duplicados.length > 0){
                const msg = duplicados.map(([id, files]) => `ID ${id}: ${files.join(', ')}`).join('\n');
                vscode.window.showErrorMessage(`ADRs com o mesmo ID foram encontrados: ${msg}`);
                return;
            }
        }
    } catch (error) {
        vscode.window.showErrorMessage('Erro ao tentar verificar o ID dos ADRs na pasta');
    }
}