import { Categoria } from "./Categoria";
import { Template } from "./Template";

export class adr{
    constructor(
        private id: number,
        private nome: string,
        private template: Template,
        private categorias: Categoria[] = []
    ) {}

    public getId(): number {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public getTemplate(): Template {
        return this.template;
    }

    public getCategorias(): Categoria[] {
        return this.categorias;
    }

    public addCategoria(categoria: Categoria): void {
        this.categorias.push(categoria);
    }

    public validaAdr(): boolean {
        // fazer dps de implementar o validate
        return true;
    }
}