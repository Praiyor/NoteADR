import * as vscode from 'vscode';
import { getNonce } from '../utils';

export function registerMainView(context: vscode.ExtensionContext){
    context.subscriptions.push(
        vscode.commands.registerCommand('noteadr.abrirMainView', () => {
            MainView.getInstance(context.extensionUri, context);
        })
    );
}

export class MainView {
    //Atualizar para utilizar apenas 1 webview pelo sistema
    public static mainView: MainView | undefined;
    public static readonly viewType = 'mainView';
    private constructor(public readonly webviewPanel: vscode.WebviewPanel, private readonly _extensionUri: vscode.Uri, public extensionContext: vscode.ExtensionContext){
        this._updateView();
    }

    public static getInstance(extensionUri: vscode.Uri, extensionContext: vscode.ExtensionContext){
        const column = vscode.window.activeTextEditor 
            ? vscode.window.activeTextEditor.viewColumn
            : undefined;
            
        if(MainView.mainView){
            MainView.mainView.webviewPanel.reveal(column);
            MainView.mainView._updateView();
            return;
        }

        const view = vscode.window.createWebviewPanel(
            MainView.viewType,
            "Note ADR Main View",
            column || vscode.ViewColumn.One,
            {
                enableScripts: true,
                localResourceRoots: [vscode.Uri.joinPath(extensionUri, 'media')]
            }
        );

        MainView.mainView = new MainView(view, extensionUri, extensionContext);
    }

    private async _updateView(){
        const webview = this.webviewPanel.webview;
        this.webviewPanel.webview.html = this._getHtmlForWebView(webview);

        this.webviewPanel.webview.onDidReceiveMessage((data) => {
            switch(data.type){
                case 'search-adr': {
                    // vscode.commands.executeCommand('');
                    break;
                }
                case 'create-adr': {
                    vscode.commands.executeCommand('noteadr.abrirCreateAdrView');
                    break;
                }

                case 'update-list': {
                    
                    break;
                }
            }
        });
    }

    private _getHtmlForWebView(webview: vscode.Webview){
        const styleResetUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'css' , 'reset.css'));
        const styleMainViewUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'css', 'mainView.css'));
        const scriptMainViewUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'js', 'mainView.js'));

        const nonce = getNonce();

        return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="Content-Security-Policy"
                 content="
                    style-src ${webview.cspSource}
                    script-src 'nonce-${nonce}';">
                <link href="${styleResetUri}" rel="stylesheet">
                <link href="${styleMainViewUri}" rel="stylesheet">
                <title>Note ADR Main View</title>
            </head>
            <body>
                <div class="search-container">
                    <input type="text" id="adr-search" placeholder="Pesquisar ADR..." />
                    <button id="btn-search">Pesquisar</button>
                    <button id="btn-new-adr">Novo ADR</button>
                </div>

                <div id="adr-list" class="adr-list">
                    <!-- Lista de ADRs será populada aqui via JS -->
                </div>

                <script nonce="${nonce}" src="${scriptMainViewUri}"></script>
            </body>
            </html>
            `;
    }
}