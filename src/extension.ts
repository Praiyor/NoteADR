
import * as vscode from 'vscode';
import { AppView } from './views/AppView';
import { inicializarNodeAdr } from './services/inicializarservice';


export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "noteadr" is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('noteadr.iniciarNoteAdr', () => {

			vscode.window.showInformationMessage('noteADR iniciado!');

			inicializarNodeAdr();

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

}

// This method is called when your extension is deactivated
export function deactivate() {}
