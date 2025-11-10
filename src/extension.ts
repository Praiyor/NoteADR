
import * as vscode from 'vscode';
import { AppView } from './views/AppView';
import { getAdrDiretorio, getTemplateDiretorio, inicializarNodeAdr, isExtensionReady } from './services/inicializarService';
import { getWorkspaceRootPath, validateAdrIds } from './Utils/utils';
import { deleteAdr, getAdrById, getAdrRepository, getAdrToValidate, validateAdrService } from './services/adrService';
import { atualizaTemplateByFileName, deleteTemplateByFileName } from './services/templateService';


export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(
		vscode.commands.registerCommand('noteadr.iniciarNoteAdr', async() => {

			await inicializarNodeAdr(context);

		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('noteadr.abrirMainView', async () => {
			const ready = await isExtensionReady();
        	if (!ready) {
        	    vscode.window.showWarningMessage(
        	        "A extensão noteADR ainda não está iniciada. Execute o comando 'noteadr.inicializar' antes de abrir a tela principal."
        	    );
        	    return;
        	}
			await validateAdrIds();
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
			if (!filePath) {
				vscode.window.showInformationMessage('Nenhum arquivo ADR fornecido para validação.');
				return;
			}
			await validateAdrService(filePath);
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

	context.subscriptions.push(
		vscode.commands.registerCommand('noteadr.deleteTemplate', async (fileName: string) => {
			vscode.window.showInformationMessage('Comando de deletar Template acionado.');
			if(fileName){
				deleteTemplateByFileName(fileName);
			}
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('noteadr.atualizaTemplate', async (fileName: string) => {
			vscode.window.showInformationMessage('Comando de atualizar Template acionado.');
			if(fileName){
				atualizaTemplateByFileName(fileName);
			}
		})
	);

	const adrPath = getAdrDiretorio();
	const templatePath = getTemplateDiretorio();
	const workspaceFolder = getWorkspaceRootPath();

	if(!workspaceFolder){
		vscode.window.showInformationMessage("Nenhum workspace aberto.");
		return;
	}

	const adrFolderPath = new vscode.RelativePattern(workspaceFolder.uri.fsPath, `${adrPath}/*.md`);
	const watcherAdr = vscode.workspace.createFileSystemWatcher(adrFolderPath);
	
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
		vscode.commands.executeCommand('noteadr.deleteTemplate', fileName);
	});
	watcherTemplate.onDidChange(uri => {
		const fileName = uri.fsPath.split(/[/\\]/).pop(); 
		vscode.commands.executeCommand('noteadr.atualizaTemplate', fileName);
	});

	context.subscriptions.push(watcherAdr);
	context.subscriptions.push(watcherTemplate);

}

// This method is called when your extension is deactivated
export function deactivate() {}
