
import * as vscode from 'vscode';
import { AppView } from './views/AppView';
import { getAdrDiretorio, getTemplateDiretorio, inicializarNodeAdr } from './services/inicializarService';
import { getWorkspaceRootPath } from './Utils/utils';
import { deleteAdr, getAdrById, getAdrToValidate } from './services/adrService';


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

	context.subscriptions.push(
		vscode.commands.registerCommand('noteadr.deleteAdr', async (fileName: string) => {
			vscode.window.showInformationMessage('Comando de deletar ADR acionado.');
			if(fileName){
				const adr = await getAdrById(parseInt(fileName.split("-")[0], 10));

				if(adr){
					deleteAdr(adr);
					vscode.window.showInformationMessage(`ADR ${adr.getId()} - ${adr.getNome()} deletado do banco.`);
				}
			}
		})
	);

	const adrPath = getAdrDiretorio();
	const templatePath = getTemplateDiretorio();
	const workspaceFolder = getWorkspaceRootPath();

	if(!workspaceFolder){
		console.log("Nenhum workspace aberto.");
		return;
	}

	const adrFolderPath = new vscode.RelativePattern(workspaceFolder.uri.fsPath, `${adrPath}/*.md`);
	const watcherAdr = vscode.workspace.createFileSystemWatcher(adrFolderPath);
	
	// Provavelmente n precisa fazer ao criar
	watcherAdr.onDidCreate(uri => {
		vscode.commands.executeCommand('noteadr.validateAdr', uri.fsPath);
	});
	watcherAdr.onDidChange(uri => {
		vscode.commands.executeCommand('noteadr.validateAdr', uri.fsPath);
	});
	watcherAdr.onDidDelete(uri => {
		const fileName = uri.fsPath.split(/[/\\]/).pop(); 
		vscode.commands.executeCommand('noteadr.deleteAdr', fileName);
	});

	const templateFolderPath = new vscode.RelativePattern(workspaceFolder.uri.fsPath, `${templatePath}/*.md`);
	const watcherTemplate = vscode.workspace.createFileSystemWatcher(templateFolderPath);

	watcherTemplate.onDidDelete(uri => {
		const fileName = uri.fsPath.split(/[/\\]/).pop(); 
		console.log(`Template deletado: ${fileName}`);
	});

	context.subscriptions.push(watcherAdr);

}

// This method is called when your extension is deactivated
export function deactivate() {}
