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

    public getRegras(): Record<string, any> {
        return this.regras;
    }

    public getField(): Field | undefined {
        return this.field;
    }
}