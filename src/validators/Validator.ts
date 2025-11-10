import * as fs from "fs/promises";
import * as vscode from 'vscode';

type FieldRule = {
  campo: string;
  regra: any;
}

export abstract class Validator<T, R = boolean>{
  protected rules: FieldRule[] = [];
  protected conteudo: string = "";
  protected arquivo: string = "";
  protected camposValues: { campo: string; valor: string}[] = [];
  private static instances: Map<Function, Validator<any>> = new Map();

  constructor(){}

  public static getInstance<T, U extends Validator<any, any>>(this: new () => U): U {
    if (!Validator.instances.has(this)) {
      Validator.instances.set(this, new this());
    }
    return Validator.instances.get(this)! as U;
  }

  public abstract validate(data: T, filePath: string): Promise<any>;

  protected abstract loadRules(data: T): void;

  protected abstract getValues(): void;

  protected abstract checkRules(valor: string, regra: any): R;

  protected async loadFile(filePath: string): Promise<void> {
    this.arquivo = filePath;
    try {
      this.conteudo = await fs.readFile(filePath, "utf-8");
    } catch (err: any) {
      vscode.window.showInformationMessage('Erro ao tentar ler o ADR, tente novamente mais tarde.');
    }
  }

}