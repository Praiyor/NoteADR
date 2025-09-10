import { Rule } from "./Rule";
import { Template } from "./Template";

export class Field {
    constructor(
        private id: number, 
        private campos: Record<string, any>,
        private rule: Rule,
        private template?: Template
    ) {}

    public getId(): number {
        return this.id;
    }

    public getCampos(): Record<string, any> {
        return this.campos;
    }

    public getRule(): Rule {
        return this.rule;
    }

    public getTemplate(): Template | undefined {
        return this.template;
    }
}