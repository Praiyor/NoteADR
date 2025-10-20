import * as vscode from 'vscode';
import { MainView } from './MainView';
import { CreateADR } from './CreateADRView';
import { createADR, getAdrById, getAdrFileUri, getAdrs, SubstiteADR } from '../services/adrService';
import { safeStringify } from '../Utils/utils';
import { SubstituirADR } from './SubstituirView';
import { getTemplates, saveTemplate } from '../services/templateService';
import { CategoriaView } from './CategoriasView';
import { addCategoria, getCategoriaById, getCategorias, removeCategoria } from '../services/categoriaService';

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

    public static getInstance(extensionUri: vscode.Uri, page: string, payload?: any){
        const column = vscode.window.activeTextEditor 
            ? vscode.window.activeTextEditor.viewColumn
            : undefined;

        if(AppView.currentWebView){
            AppView.currentWebView.update(page, payload);
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

    private update(page: string, payload?: any){
        this.updateTitle(page);
        this.webViewPanel.webview.html = this._getHtmlForWebView(this.webViewPanel.webview, page, payload);
    }

    private registerMessageListener(){
        this.webViewPanel.webview.onDidReceiveMessage(
            async(data) => {
                switch(data.command){
                    case 'create-adr': {
                        vscode.commands.executeCommand('noteadr.abrirCriarADRView');
                        break;
                    }

                    case 'main-view': {
                        vscode.commands.executeCommand('noteadr.abrirMainView');
                        break;
                    }

                    case 'update-list': {
                        const adrs = await getAdrs();

                        this.webViewPanel.webview.postMessage({
                            type: "update-adr-list",
                            data: safeStringify(adrs)
                        });
                        break;
                    }

                    case 'replace-adr': {
                        const adrId = data.value;
                        vscode.commands.executeCommand('noteadr.substituirADR', adrId);
                        break;
                    }

                    case 'categorias-adr': {
                        const adrId = data.value;
                        vscode.commands.executeCommand('noteadr.categoriaADR', adrId);
                        break;
                    }

                    case 'load-templates': {
                        const templates = await getTemplates();
                        
                        this.webViewPanel.webview.postMessage({
                            type: "load-templates",
                            data: safeStringify(templates)
                        });
                        break;
                    }
                    case 'get-categoria-list': {
                        const adrId = data.adrId;
                        const {categorias, adrCategorias} = await getCategorias(adrId);

                        this.webViewPanel.webview.postMessage({
                            type: "update-categoria-list",
                            data: {
                                categorias,
                                adrCategorias,
                                adrId
                            }
                        });
                        break;
                    }

                    case 'remove-categoria': {
                        const adrId = data.adrId;
                        const categoriaId = data.categoriaId;
                        const categoria = await getCategoriaById(categoriaId);
                        const adr = await getAdrById(adrId);
                        if(!categoria || !adr){
                            return;
                        }

                        await removeCategoria(categoria, adr);

                        const {categorias, adrCategorias} = await getCategorias(adrId);

                        this.webViewPanel.webview.postMessage({
                            type: "update-categoria-list",
                            data: {
                                categorias,
                                adrCategorias,
                                adrId
                            }
                        });
                        break;
                    }

                    case 'add-categoria': {
                        const adrId = data.adrId;
                        const categoriaId = data.categoriaId;
                        const categoria = await getCategoriaById(categoriaId);
                        const adr = await getAdrById(adrId);
                        if(!categoria || !adr){
                            return;
                        }

                        await addCategoria(categoria, adr);

                        const {categorias, adrCategorias} = await getCategorias(adrId);

                        this.webViewPanel.webview.postMessage({
                            type: "update-categoria-list",
                            data: {
                                categorias,
                                adrCategorias,
                                adrId
                            }
                        });
                        break;
                    }

                    case 'new-adr': {
                        const adrTitulo = data.titulo;
                        const templateId = Number(data.templateId);
                        const result = await createADR(adrTitulo, templateId);

                        if(result && result.fileUri){
                            this.openADR(result.fileUri);
                        }

                        vscode.commands.executeCommand('noteadr.abrirMainView');

                        break;
                    }

                    case 'alter-adr': {
                        const adrId = data.value;
                        const fileUri = await getAdrFileUri(adrId);
                        if(fileUri){
                            this.openADR(fileUri);
                        }

                        break;
                    }

                    case 'view-adr': {
                        const adrId = data.value;
                        const fileUri = await getAdrFileUri(adrId);
                        
                        await vscode.commands.executeCommand("markdown.showPreviewToSide", fileUri);

                        break;
                    }

                    case 'substite-adr': {
                        const adrId = data.selectedAdr;
                        const substituteAdrId = data.substituteAdr;
                        const result = await SubstiteADR(adrId, substituteAdrId);
                        if(result){
                            vscode.commands.executeCommand('noteadr.abrirMainView');
                        }

                        break;
                    }

                    case 'import-template': {
                        const templateSelect = await vscode.window.showOpenDialog({
                            canSelectMany: false,
                            openLabel: 'Importar Template',
                            filters: {
                                'Markdown files': ['md']
                            }
                        });

                        if(templateSelect && templateSelect.length > 0){
                            const fileUri = templateSelect[0];
                            const fileContent = (await vscode.workspace.fs.readFile(fileUri)).toString();

                            const boolean = await saveTemplate(fileUri.path.split('/').pop() ?? 'template.md', fileContent);

                            if(boolean){
                                vscode.window.showInformationMessage('Template importado com sucesso!');
                            }else {
                                vscode.window.showErrorMessage('Erro ao importar template.');
                            }

                            vscode.commands.executeCommand('noteadr.abrirMainView');
                        }

                        break;
                    }
                }
            }
        );
    }

    private _getHtmlForWebView(webview: vscode.Webview, page: string, payload?: any): string{
        switch(page){
            case "main":
                return MainView.getHtml(webview, this._extensionUri);
            
            case "createADR":
                return CreateADR.getHtml(webview, this._extensionUri);

            case "substituirADR": 
                return SubstituirADR.getHtml(webview, this._extensionUri, payload.adrId);

            case "categoriaAdr":
                return CategoriaView.getHtml(webview, this._extensionUri, payload.adrId);

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
            case "substituirADR":
                this.webViewPanel.title = "noteADR - Substituir ADR";
                break;
            case "categoriaAdr":
                this.webViewPanel.title = "noteADR - Gerenciar categorias do ADR";
                break;
            default:
                this.webViewPanel.title = "noteADR";
                break;
        }
    }

    private async openADR(fileUri: vscode.Uri){
        await vscode.window.showTextDocument(fileUri);
    }
}
