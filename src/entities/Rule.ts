import { Field } from "./Field";

export class Rule {
    private id?: number;

    constructor(
        private regras: any[],
        private field?: Field
    ) {}

    public getId(): number | undefined {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }


    public getRegras(): any[] {
        return this.regras;
    }

    public setRegras(regras: any[]): void {
        this.regras = regras;
    }

    public getField(): Field | undefined {
        return this.field;
    }

    public setField(field: Field | undefined): void {
        this.field = field;
    }
}