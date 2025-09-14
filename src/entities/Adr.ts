import { Categoria } from "./Categoria";
import { Template } from "./Template";

export class Adr{
    constructor(
        private id: number,
        private nome: string,
        private template: Template,
        private categorias: Categoria[] = []
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

    public getTemplate(): Template {
        return this.template;
    }

    public setTemplate(template: Template): void {
        this.template = template;
    }

    public getCategorias(): Categoria[] {
        return this.categorias;
    }

    public setCategorias(categorias: Categoria[]): void {
        this.categorias = categorias;
    }

    public addCategoria(categoria: Categoria): void {
        this.categorias.push(categoria);
    }

    public validaAdr(): boolean {
        // fazer dps de implementar o validate
        return true;
    }
}