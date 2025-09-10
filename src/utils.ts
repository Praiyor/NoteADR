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
