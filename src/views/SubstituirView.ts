import * as vscode from 'vscode';
import { getNonce } from '../Utils/utils';


export class SubstituirADR {

    public static getHtml(webview: vscode.Webview, extensionUri: vscode.Uri, adrId: number){
        const styleResetUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'css' , 'reset.css'));
        const styleViewUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'css', 'substituirAdrView.css'));
        const scriptViewUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'js', 'substituirAdrView.js'));

        const nonce = getNonce();

        return `<!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="Content-Security-Policy"
                    content="style-src ${webview.cspSource};
                             script-src ${webview.cspSource} 'nonce-${nonce}';">
                <link href="${styleResetUri}" rel="stylesheet">
                <link href="${styleViewUri}" rel="stylesheet">
                <title>Note ADR - Substituir</title>
            </head>
            <body>
                <div class="form-container">
                    <h2>Substituir ADR</h2>

                    <label>ADR Selecionado</label>
                    <div id="adr-info" class="adr-info-box">
                      Carregando ADR ...
                    </div>
                    
                    <input type="hidden" id="adr-id" value="${adrId}" />

                    <label for="novo-adr">Substituir por:</label>
                    <select id="novo-adr"></select>

                    <div class="button-group">
                        <button id="btn-back" class="back-button">Voltar</button>
                        <button id="btn-replace-adr">Substituir ADR</button>
                    </div>
                </div>

                <script nonce="${nonce}" src="${scriptViewUri}"></script>
            </body>
            </html>`;
    }
}