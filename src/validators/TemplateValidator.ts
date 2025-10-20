import { Template } from "../entities/Template";
import { Validator } from "./Validator";
import * as vscode from 'vscode';

type validatorResult = {
    valido: boolean;
    campos: any[];
    regras: any[];
}

export class TemplateValidator  {
    
    public async validate(templateName: string, conteudo: string): Promise<validatorResult>  {
        const campos: any[] = [];
        const regras: any[] = [];

        if(!templateName.toLowerCase().endsWith('.md')){
            vscode.window.showErrorMessage('O template deve estar no formato Markdown (.md)');
            return { valido: false, campos, regras };
        }

        conteudo = conteudo.replace(/\r\n/g, '\n');

        const regex = /^(#+)\s*([^{\n]+?)\s*(\{[\s\S]*?\})?\s*$/gm;
        let match;

        while ((match = regex.exec(conteudo)) !== null) {
            const titulo = match[2].trim();
            const regraBruta = match[3] ? match[3].trim() : "{}";

            try {
                const regra = JSON.parse(regraBruta);
                campos.push(titulo);
                regras.push(regra);
            } catch (err) {
                vscode.window.showErrorMessage(`Erro ao interpretar regras do campo "${titulo}".`);
                return { valido: false, campos, regras };
            }
        }

        if(campos.length === 0 || regras.length === 0){
            vscode.window.showErrorMessage('Nenhum campo ou regra encontrado no template.');
            return { valido: false, campos, regras };
        }

        for(let i = 0; i < regras.length; i++){
            const regra = regras[i];
            const campo = campos[i];

            if(typeof regra !== 'object'){
                vscode.window.showErrorMessage(`Regra inválida para o campo "${campo}". Deve ser um objeto válido.`);
                return { valido: false, campos, regras };
            }

            if (regra.wordCount) {
                const { min, max } = regra.wordCount;
                if (min !== undefined && typeof min !== "number") {
                    vscode.window.showErrorMessage(`'wordCount.min' do campo "${campo}" deve ser numérico.`);
                    return { valido: false, campos, regras };
                }
                if (max !== undefined && typeof max !== "number") {
                    vscode.window.showErrorMessage(`'wordCount.max' do campo "${campo}" deve ser numérico.`);
                    return { valido: false, campos, regras };
                }
            }
        
            if (regra.enum && !Array.isArray(regra.enum)) {
                vscode.window.showErrorMessage(`A regra 'enum' do campo "${campo}" deve ser uma lista.`);
                return { valido: false, campos, regras };
            }
        
            if (regra.contains && !(Array.isArray(regra.contains) || typeof regra.contains === "string")) {
                vscode.window.showErrorMessage(`A regra 'contains' do campo "${campo}" deve ser texto ou lista.`);
                return { valido: false, campos, regras };
            }
        
            if (regra.notContains && !(Array.isArray(regra.notContains) || typeof regra.notContains === "string")) {
                vscode.window.showErrorMessage(`A regra 'notContains' do campo "${campo}" deve ser texto ou lista.`);
                return { valido: false, campos, regras };
            }
        
            if (regra.noSpecialChars && typeof regra.noSpecialChars !== "boolean") {
                vscode.window.showErrorMessage(`A regra 'noSpecialChars' do campo "${campo}" deve ser boolean.`);
                return { valido: false, campos, regras };
            }
        
            if (regra.date && typeof regra.date !== "boolean") {
                vscode.window.showErrorMessage(`A regra 'date' do campo "${campo}" deve ser boolean.`);
                return { valido: false, campos, regras };
            }
        }


        return { valido: true, campos, regras };
    }
    
}