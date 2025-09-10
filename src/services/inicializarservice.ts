import * as vscode from 'vscode';
import { getWorkspaceRootPath } from '../utils';
import { Database } from '../repository/Database';


export async function inicializarNodeAdr(): Promise<void>{
    const root = getWorkspaceRootPath();

    if(!root){
        return;
    }

    const adrDiretorio = vscode.Uri.joinPath(root.uri, getAdrDiretorio()) ;
    const templateDiretorio = vscode.Uri.joinPath(root.uri, getTemplateDiretorio());

    if(!await existeDiretorio(adrDiretorio)){
        console.log("Não existe ainda");
        await criarDiretorio(adrDiretorio);
        await criarDiretorio(templateDiretorio);
    }else{
        console.log("Já existe");
    }

    const db = Database.getInstance();
    const dbDir = db.getDatabaseConfig();
    if(!await existeArquivo(vscode.Uri.joinPath(root.uri, dbDir, "extension.db"))){
        console.log("Banco não existe, criando...");
        await db.initDatabase();
    } else{
        console.log("Banco já existe");
    }

    console.log(`noteADR iniciado!`);
}

function getAdrDiretorio(): string {
    return vscode.workspace.getConfiguration().get('noteadr.adrDiretorio') ?? 'docs/adr';
}

function getTemplateDiretorio(): string {
    return vscode.workspace.getConfiguration().get('noteadr.templateDiretorio') ?? 'docs/templates';
}

async function existeDiretorio(uri:vscode.Uri): Promise<boolean> {
    try {
        const stat = await vscode.workspace.fs.stat(uri);

        return stat.type === vscode.FileType.Directory;
    } catch (error) {
        return false;
    }
}

async function existeArquivo(uri:vscode.Uri): Promise<boolean> {
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