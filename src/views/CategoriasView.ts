import * as vscode from 'vscode';
import { getNonce } from '../Utils/utils';

export class CategoriaView {

    public static getHtml(webview: vscode.Webview, extensionUri: vscode.Uri, adrId: number){
        const styleResetUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'css' , 'reset.css'));
        const styleCategoriaViewUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'css', 'categoriaView.css'));
        const scriptCategoriaViewUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'js', 'categoriaView.js'));

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
                <link href="${styleCategoriaViewUri}" rel="stylesheet">
                <title>Note ADR Main View</title>
            </head>
            <body>
                <div class="adr-header">
                    <h2 id="adr-name">ADR Selecionado</h2>
                </div>
                <input type="hidden" id="adr-id" value="${adrId}" />

                <label for="categorias">Categorias:</label>
                <div id="categoria-list" class="categoria-list">
                    
                </div>

                <div class="button-group">
                    <button id="btn-back" class="back-button">Voltar</button>
                </div>

                <script nonce="${nonce}" src="${scriptCategoriaViewUri}"></script>
            </body>
            </html>
            `;
    }
}
