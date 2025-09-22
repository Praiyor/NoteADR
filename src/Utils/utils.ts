import { Prisma } from '@prisma/client';
import * as vscode from 'vscode';

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

export function toRecord(json: Prisma.JsonValue | null): Record<string, any> {
  if (json && typeof json === "object" && !Array.isArray(json)) {
    return json as Record<string, any>;
  }
  return {};
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