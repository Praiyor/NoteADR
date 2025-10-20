import { Adr } from "./Adr";
import { Field } from "./Field";

export class Template {
    private id?: number;

    constructor(
        private nome: string,
        private field: Field,
        private adrs: Adr[] = [],
    ) {}

    public getId(): number | undefined {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getField(): Field {
        return this.field;
    }

    public setField(field: Field): void {
        this.field = field;
    }

    public getAdrs(): Adr[] {
        return this.adrs;
    }

    public setAdrs(adrs: Adr[]): void {
        this.adrs = adrs;
    }

    public addAdr(adrItem: Adr): void {
        this.adrs.push(adrItem);
    }

    public validateTemplate(): boolean {
        return true;
    }
}