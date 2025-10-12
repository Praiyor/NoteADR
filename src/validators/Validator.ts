import * as fs from "fs/promises";

type FieldRule = {
    campo: string;
    regra: any;
}

export abstract class Validator<T>{
    protected rules: FieldRule[] = [];
    protected conteudo: string = "";
    protected arquivo: string = "";
    private static instances: Map<Function, Validator<any>> = new Map();

    constructor(){}

    public static getInstance<T, U extends Validator<T>>(this: new () => U): U {
      if (!Validator.instances.has(this)) {
        console.log(Validator.instances);
        Validator.instances.set(this, new this());
      }
      return Validator.instances.get(this)! as U;
    }

    public abstract validate(data: T, filePath: string): Promise<boolean> ;

    protected abstract loadRules(data: T): void;

    protected async loadFile(filePath: string): Promise<void> {
      this.arquivo = filePath;
      try {
        this.conteudo = await fs.readFile(filePath, "utf-8");
      } catch (err: any) {
        throw new Error(`Erro ao ler o arquivo ${filePath}: ${err.message}`);
      }
    }

}