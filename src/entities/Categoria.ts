import { Adr } from "./Adr";

export class Categoria{
    constructor(
        private id: number,
        private nome: string,
        private adrs: Adr[] = []
    ) {}

    public getId(): number {
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

    public setAdrs(adrs: Adr[]): void {
        this.adrs = adrs;
    }

    public getAdrs(): Adr[] {
        return this.adrs;
    }

    public addAdr(adrItem: Adr): void {
        this.adrs.push(adrItem);
    }
}