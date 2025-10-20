import * as vscode from 'vscode';
import { getNonce } from '../Utils/utils';



export class MainView {

    public static getHtml(webview: vscode.Webview, extensionUri: vscode.Uri){
        const styleResetUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'css' , 'reset.css'));
        const styleMainViewUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'css', 'mainView.css'));
        const scriptMainViewUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'js', 'mainView.js'));

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
                <div class="search-container">
                    <input type="text" id="adr-search" placeholder="Pesquisar ADR..." />
                    <button id="btn-new-adr">Novo ADR</button>
                    <button id="btn-import-template">Importar Template</button>
                </div>

                <div id="adr-list" class="adr-list">
                    
                </div>

                <script nonce="${nonce}" src="${scriptMainViewUri}"></script>
            </body>
            </html>
            `;
    }
}