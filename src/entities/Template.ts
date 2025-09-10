import { adr } from "./Adr";
import { Field } from "./Field";

export class Template {
    constructor(
        private id: number,
        private nome: string,
        private field: Field,
        private adrs: adr[] = []
    ) {}

    public getId(): number {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public getField(): Field {
        return this.field;
    }

    public getAdrs(): adr[] {
        return this.adrs;
    }

    public validateTemplate(): boolean {
        // fazer dps de implementar o validate
        return true;
    }

    //Talvez fazer o getRegras pra transformas o record de fields e regras em algo mais fácil de manipular?
}