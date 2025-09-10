import { adr } from "./Adr";

export class Categoria{
    constructor(
        private id: number,
        private nome: string,
        private adrs: adr[] = []
    ) {}

    public getId(): number {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public getAdrs(): adr[] {
        return this.adrs;
    }
}