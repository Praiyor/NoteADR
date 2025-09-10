import * as vscode from 'vscode';
import { getNonce } from '../utils';

export function registerCreateAdrView(context: vscode.ExtensionContext){
    context.subscriptions.push(
        vscode.commands.registerCommand('noteadr.abrirCreateAdrView', () => {
            CreateADR.getInstance(context.extensionUri, context);
        })
    );
}

export class CreateADR {
    //Atualizar para utilizar apenas 1 webview pelo sistema
    public static createADRView: CreateADR | undefined;
    public static readonly viewType = 'createAdrView';
    private constructor(public readonly webviewPanel: vscode.WebviewPanel, private readonly _extensionUri: vscode.Uri, public extensionContext: vscode.ExtensionContext){
        this._updateView();
    }

    public static getInstance(extensionUri: vscode.Uri, extensionContext: vscode.ExtensionContext){
        const column = vscode.window.activeTextEditor 
            ? vscode.window.activeTextEditor.viewColumn
            : undefined;
            
        if(CreateADR.createADRView){
            CreateADR.createADRView.webviewPanel.reveal(column);
            CreateADR.createADRView._updateView();
            return;
        }

        const view = vscode.window.createWebviewPanel(
            CreateADR.viewType,
            "Note ADR - Criar ADR",
            column || vscode.ViewColumn.One,
            {
                enableScripts: true,
                localResourceRoots: [vscode.Uri.joinPath(extensionUri, 'media')]
            }
        );

        CreateADR.createADRView = new CreateADR(view, extensionUri, extensionContext);
    }

    private async _updateView(){
        const webview = this.webviewPanel.webview;
        this.webviewPanel.webview.html = this._getHtmlForWebView(webview);

        const templates = [
        { id: "template1", name: "Template 1" },
        { id: "template2", name: "Template 2" },
        { id: "template3", name: "Template 3" }
        ];

        webview.postMessage({
        type: "load-templates",
        data: templates
        });

        this.webviewPanel.webview.onDidReceiveMessage((data) => {
            switch(data.type){

                case 'create-adr': {
                    //robson
                    break;
                }
            }
        });
    }

    private _getHtmlForWebView(webview: vscode.Webview){
        const styleResetUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'css' , 'reset.css'));
        const styleMainViewUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'css', 'createAdrView.css'));
        const scriptMainViewUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'js', 'createAdrView.js'));

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
                <div class="form-container">
                    <input type="text" id="titulo-adr" placeholder="Titulo" />
                    <select id="template-adr"></select>
                    <button id="btn-create-adr">Criar ADR</button>
                </div>

                <script nonce="${nonce}" src="${scriptMainViewUri}"></script>
            </body>
            </html>
            `;
    }
}