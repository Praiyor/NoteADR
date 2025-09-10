
import * as vscode from 'vscode';
import { inicializarNodeAdr } from './services/inicializarservice';
import { registerMainView } from './views/MainView';
import { registerCreateAdrView } from './views/CreateADR';


export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "noteadr" is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('noteadr.iniciarNoteAdr', () => {

			vscode.window.showInformationMessage('noteADR iniciado!');

			inicializarNodeAdr();

		})
	);

	registerMainView(context);
	registerCreateAdrView(context);

}

// This method is called when your extension is deactivated
export function deactivate() {}
