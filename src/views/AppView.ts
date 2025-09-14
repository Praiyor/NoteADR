import * as vscode from 'vscode';
import { MainView } from './MainView';
import { CreateADR } from './CreateADRView';

export class AppView {
    public static currentWebView: AppView | undefined;
    public static readonly viewType = "noteADR";

    private constructor(private readonly webViewPanel: vscode.WebviewPanel, 
        private readonly _extensionUri: vscode.Uri, page: string
    ) {
        this.update(page);
        this.registerMessageListener();

        this.webViewPanel.onDidDispose(() => {
            AppView.currentWebView = undefined;
        });
    }

    public static getInstance(extensionUri: vscode.Uri, page: string){
        const column = vscode.window.activeTextEditor 
            ? vscode.window.activeTextEditor.viewColumn
            : undefined;

        if(AppView.currentWebView){
            AppView.currentWebView.update(page);
            AppView.currentWebView.webViewPanel.reveal(column);
            return;
        }

        const view = vscode.window.createWebviewPanel(
            AppView.viewType,
            "NoteADR",
            column || vscode.ViewColumn.One,
            {
                enableScripts: true,
                retainContextWhenHidden: true,
                localResourceRoots: [vscode.Uri.joinPath(extensionUri, 'media')]
            }
        );

        AppView.currentWebView = new AppView(view, extensionUri, page);
    }

    private update(page: string){
        this.updateTitle(page);
        this.webViewPanel.webview.html = this._getHtmlForWebView(this.webViewPanel.webview, page);
    }

    private registerMessageListener(){
        this.webViewPanel.webview.onDidReceiveMessage(
            async(data) => {
                switch(data.command){
                    case 'search-adr': {
                        // vscode.commands.executeCommand('');
                        break;
                    }
                    case 'create-adr': {
                        vscode.commands.executeCommand('noteadr.abrirCriarADRView');
                        break;
                    }

                    case 'main-view': {
                        vscode.commands.executeCommand('noteadr.abrirMainView');
                        break;
                    }

                    case 'update-list': {

                        break;
                    }
                }
            }
        );
    }

    private _getHtmlForWebView(webview: vscode.Webview, page: string): string{
        switch(page){
            case "main":
                return MainView.getHtml(webview, this._extensionUri);
            
            case "createADR":
                return CreateADR.getHtml(webview, this._extensionUri);
            default:
                return "<html><body><h1>Page not found</h1></body></html>";
        }
    }

    private updateTitle(page: string){
        switch(page){
            case "main":
                this.webViewPanel.title = "noteADR - Main View";
                break;
            case "createADR":
                this.webViewPanel.title = "noteADR - Criar ADR";
                break;
            default:
                this.webViewPanel.title = "noteADR";
                break;
        }
    }
}