import * as vscode from 'vscode';
import { Validator } from './Validator';

export type TemplateValidationError = {
  campo: string;
  regra: any;
  mensagem: string;
};

export type TemplateValidationResult = {
  valido: boolean;
  erros: TemplateValidationError[];
  campos: string[];
  regras: any[];
};

export class TemplateValidator extends Validator<string, { valido: boolean; erros: TemplateValidationError[] }> {
    
    public async validate(templateName: string, conteudo: string): Promise<TemplateValidationResult>  {
        const erros: TemplateValidationError[] = [];
        const campos: any[] = [];
        const regras: any[] = [];

        if(!templateName.toLowerCase().endsWith('.md')){
            erros.push({
                campo: 'arquivo',
                regra: {},
                mensagem: 'O template deve estar no formato Markdown'
            });
            return { valido: false, erros, campos, regras };
        }

        this.conteudo = conteudo.replace(/\r\n/g, '\n');
        this.loadRules();
        this.getValues();

        for(const { campo, regra } of this.rules) {
            const resultado = this.checkRules(campo, regra);
            if(resultado.erros.length > 0){
                erros.push(...resultado.erros);
            }

            campos.push(campo);
            regras.push(regra);
        }

        return {valido: erros.length === 0, erros, campos, regras};
    }

    protected loadRules(): void {
        const regex = /^(#+)\s*([^{\n]+?)\s*(\{[\s\S]*?\})?\s*$/gm;
        let match;
        this.rules = [];

        while ((match = regex.exec(this.conteudo)) !== null) {
            const campo = match[2].trim();
            const regraBruta = match[3] ? match[3].trim() : "{}";

            try {
                const regra = JSON.parse(regraBruta);
                this.rules.push({ campo, regra });
            } catch (err) {
                throw new Error(`Erro ao interpretar regras do campo "${campo}".`);
            }
        }
    }

    protected getValues(): void {
        this.camposValues = this.rules.map(({ campo, regra }) => ({
            campo,
            valor: JSON.stringify(regra)
        }));
    }

    protected checkRules(campo: string, regra: any): { valido: boolean, erros: TemplateValidationError[]}{
        const erros: TemplateValidationError[] = [];

        if(typeof regra !== 'object' || Array.isArray(regra)){
            erros.push({ campo, regra, mensagem: `A regra do campo "${campo}" deve ser um objeto JSON.` });
            return { valido: false, erros };
        }

        const regrasPermitidas = [
            "wordCount",
            "enum",
            "contains",
            "notContains",
            "noSpecialChars",
            "date"
        ];

        for (const chave of Object.keys(regra)) {
            if (!regrasPermitidas.includes(chave)) {
                erros.push({ campo, regra, mensagem: `Regra "${chave}" desconhecida no campo "${campo}"`});
            }
        }

        if (regra.wordCount) {
            const { min, max } = regra.wordCount;
            if (min !== undefined && typeof min !== "number") {
                erros.push({ campo, regra, mensagem: `'wordCount.min' do campo "${campo}" deve ser numérico.` });
            }
            if (max !== undefined && typeof max !== "number") {
                erros.push({ campo, regra, mensagem: `'wordCount.max' do campo "${campo}" deve ser numérico.` });
            }
        }
    
        if (regra.enum && !Array.isArray(regra.enum)) {
            erros.push({ campo, regra, mensagem: `A regra 'enum' do campo "${campo}" deve ser uma lista.` });
        }
    
        if (regra.contains && !(Array.isArray(regra.contains) || typeof regra.contains === "string")) {
            erros.push({ campo, regra, mensagem: `A regra 'contains' do campo "${campo}" deve ser texto ou lista.` });
        }
    
        if (regra.notContains && !(Array.isArray(regra.notContains) || typeof regra.notContains === "string")) {
            erros.push({ campo, regra, mensagem: `A regra 'notContains' do campo "${campo}" deve ser texto ou lista.` });
        }
    
        if (regra.noSpecialChars && typeof regra.noSpecialChars !== "boolean") {
            erros.push({ campo, regra, mensagem: `A regra 'noSpecialChars' do campo "${campo}" deve ser boolean.` });
        }
    
        if (regra.date && typeof regra.date !== "boolean") {
            erros.push({ campo, regra, mensagem: `A regra 'date' do campo "${campo}" deve ser boolean.` });
        }

        return { valido: erros.length === 0, erros };
    }
    
}