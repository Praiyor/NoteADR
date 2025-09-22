import * as vscode from 'vscode';
import { getNonce } from '../Utils/utils';


export class CreateADR {

    public static getHtml(webview: vscode.Webview, extensionUri: vscode.Uri){
        const styleResetUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'css' , 'reset.css'));
        const styleMainViewUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'css', 'createAdrView.css'));
        const scriptMainViewUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'js', 'createAdrView.js'));

        const nonce = getNonce();

        return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="Content-Security-Policy"
                 content="style-src ${webview.cspSource};
                        script-src ${webview.cspSource} 'nonce-${nonce}';">
                <link href="${styleResetUri}" rel="stylesheet">
                <link href="${styleMainViewUri}" rel="stylesheet">
                <title>Note ADR Main View</title>
            </head>
            <body>
                <div class="form-container">
                    <input type="text" id="titulo-adr" placeholder="Titulo" />
                    <select id="template-adr"></select>
                    <div class="button-group">
                        <button id="btn-back" class="back-button">Voltar</button>
                        <button id="btn-create-adr">Criar ADR</button>
                    </div>
                </div>

                <script nonce="${nonce}" src="${scriptMainViewUri}"></script>
            </body>
            </html>
            `;
    }
}