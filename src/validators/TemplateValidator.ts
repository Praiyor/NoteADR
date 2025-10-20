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

        const regex = /^#+\s*([^\n{]+?)(?:\s*\{([^}]*)\})?\s*$/gm;
        let match;

        while ((match = regex.exec(conteudo)) !== null) {
            const titulo = match[1].trim();
            const regraBruta = match[2] ? `{${match[2].trim()}}` : "{}";
    
            try {
                const regra = JSON.parse(regraBruta);
                campos.push(titulo);
                regras.push(regra);
            } catch (err) {
                vscode.window.showErrorMessage(`Erro ao recuperar os campos e regras de "${titulo}"`);
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

            if (regra.min !== undefined && typeof regra.min !== "number") {
                vscode.window.showErrorMessage(`A regra 'min' do campo "${campo}" deve ser numérica.`);
                return { valido: false, campos, regras };
            }
        
            if (regra.max !== undefined && typeof regra.max !== "number") {
                vscode.window.showErrorMessage(`A regra 'max' do campo "${campo}" deve ser numérica.`);
                return { valido: false, campos, regras };
            }
        
            if (regra.enum !== undefined && !Array.isArray(regra.enum)) {
                vscode.window.showErrorMessage(`A regra 'enum' do campo "${campo}" deve ser uma lista.`);
                return { valido: false, campos, regras };
            }
        }


        return { valido: true, campos, regras };
    }
    
}