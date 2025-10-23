import { AdrValidator } from "../validators/AdrValidator";
import { Categoria } from "./Categoria";
import { Template } from "./Template";

export class Adr{
    constructor(
        private id: number,
        private nome: string,
        private template: Template,
        private categorias: Categoria[] = [],
        private substituido: boolean = false,
        private substituidoPor: number | null = null,
        private valido: boolean = false
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

    public getSubstituido(): boolean {
        return this.substituido;
    }

    public setSubstituido(alterar: boolean): void {
        this.substituido = alterar;
    }

    public getSubstituidoPor(): number | null {
        return this.substituidoPor;
    }

    public setSubstituidoPor(adrId: number | null): void {
        this.substituidoPor = adrId;
    }

    public setCategorias(categorias: Categoria[]): void {
        this.categorias = categorias;
    }

    public addCategoria(categoria: Categoria): void {
        this.categorias.push(categoria);
    }

    public getValido(): boolean {
        return this.valido;
    }

    public setValido(valido: boolean): void {
        this.valido = valido;
    }

    public async validaAdr(filePath: string): Promise<boolean>  {
        const validator = AdrValidator.getInstance();
        const valido = await validator.validate(this, filePath);
        return valido;
    }
}