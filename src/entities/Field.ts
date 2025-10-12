import { Rule } from "./Rule";
import { Template } from "./Template";

export class Field {
    constructor(
        private id: number, 
        private campos: any[],
        private rule: Rule,
        private template?: Template
    ) {}

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getCampos(): any[] {
        return this.campos;
    }

    public setCampos(campos: any[]): void {
        this.campos = campos;
    }

    public getRule(): Rule {
        return this.rule;
    }

    public setRule(rule: Rule): void {
        this.rule = rule;
    }

    public getTemplate(): Template | undefined {
        return this.template;
    }

    public setTemplate(template: Template | undefined): void {
        this.template = template;
    }
}