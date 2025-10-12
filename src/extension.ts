
import * as vscode from 'vscode';
import { AppView } from './views/AppView';
import { getAdrDiretorio, inicializarNodeAdr } from './services/inicializarService';
import { getWorkspaceRootPath } from './Utils/utils';
import { getAdrToValidate } from './services/adrService';


export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "noteadr" is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('noteadr.iniciarNoteAdr', () => {

			vscode.window.showInformationMessage('noteADR iniciado!');

			inicializarNodeAdr(context);

		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('noteadr.abrirMainView', () => {
			AppView.getInstance(context.extensionUri, "main");
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('noteadr.abrirCriarADRView', (view?: string) =>{
			if(!view){
				AppView.getInstance(context.extensionUri, "createADR");
			}else {
				AppView.getInstance(context.extensionUri, view);
			}
		})
	);

	context.subscriptions.push(
	  	vscode.commands.registerCommand('noteadr.substituirADR', (adrId: number) => {
	  	  	AppView.getInstance(context.extensionUri, "substituirADR", { adrId });
	  	})
	);

	context.subscriptions.push(
	  	vscode.commands.registerCommand('noteadr.categoriaADR', (adrId: number) => {
	  	  	AppView.getInstance(context.extensionUri, "categoriaAdr", { adrId });
	  	})
	);
	
	context.subscriptions.push(
		vscode.commands.registerCommand('noteadr.validateAdr', async (filePath: string) => {
			console.log('Validando ADR');
			if (filePath) {
				const adr = await getAdrToValidate(filePath);
				console.log(adr);
				const validado = await adr?.validaAdr(filePath);
				if(validado){
					vscode.window.showInformationMessage(`ADR ${adr?.getId()} - ${adr?.getNome()} está válido!`);
				} 
				else{
					vscode.window.showErrorMessage(`ADR ${adr?.getId()} - ${adr?.getNome()} está inválido! Verifique os campos obrigatórios.`);
				}
			} 
			else {
				vscode.window.showInformationMessage('Nenhum arquivo ADR fornecido para validação.');
			}
		})
	);

	const adrPath = getAdrDiretorio();
	const workspaceFolder = getWorkspaceRootPath();

	if(!workspaceFolder){
		console.log("Nenhum workspace aberto.");
		return;
	}

	const folderPath = new vscode.RelativePattern(workspaceFolder.uri.fsPath, `${adrPath}/*.md`);
	const watcher = vscode.workspace.createFileSystemWatcher(folderPath);

	// Provavelmente n precisa fazer ao criar
	watcher.onDidCreate(uri => {
		vscode.commands.executeCommand('noteadr.validateAdr', uri.fsPath);
	});
	watcher.onDidChange(uri => {
		vscode.commands.executeCommand('noteadr.validateAdr', uri.fsPath);
	});

	context.subscriptions.push(watcher);

}

// This method is called when your extension is deactivated
export function deactivate() {}
