import { Field } from "./Field";

export class Rule {
    constructor(
        private id: number,
        private regras: Record<string, any>,
        private field?: Field
    ) {}

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }


    public getRegras(): Record<string, any> {
        return this.regras;
    }

    public setRegras(regras: Record<string, any>): void {
        this.regras = regras;
    }

    public getField(): Field | undefined {
        return this.field;
    }

    public setField(field: Field | undefined): void {
        this.field = field;
    }
}