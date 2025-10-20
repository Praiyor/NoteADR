import { Adr } from "../entities/Adr";
import { Validator } from "./Validator";
import * as vscode from 'vscode';


export class AdrValidator extends Validator<Adr> {
    
  constructor() { super(); }
  
  public async validate(adr: Adr, filePath: string): Promise<boolean> {
    this.loadRules(adr);
    await this.loadFile(filePath);
    this.getValues();
    let valido = true;

    for(let i = 0; i < this.rules.length; i++){
      const { campo, regra } = this.rules[i];
      const { valor } = this.camposValues[i];

      if(!this.checkRules(valor, regra)){
        valido = false;
        vscode.window.showErrorMessage(`Campo "${campo}" inválido!`);
      }
    }

    return valido;
  }

  protected loadRules(data: Adr): void{
    let campos: string[] = [];
    let regras: any = {};

    if (data.getTemplate()) {
      campos = data.getTemplate().getField().getCampos();
      regras = data.getTemplate().getField().getRule().getRegras();
    } 
    else {
      throw new Error("Campos e regras inválidos.");
    }

    this.rules = campos.map((campo: string, index: number) => ({
      campo,
      regra: Array.isArray(regras) ? regras[index] : regras[campo] ?? {}
    }));
  }

  protected getValues(): void {
    if(!this.conteudo || !this.rules.length){
      vscode.window.showInformationMessage('Erro ao tentar validar o ADR, tente novamente mais tarde.');
    }

    const tituloRegex = /^#\s*(?:Title|Título):\s*(.+)$/im;
    let titulo = "";

    const matchTitulo = this.conteudo.match(tituloRegex);
    if (matchTitulo) {
      titulo = matchTitulo[1].trim();
    }

    this.camposValues = this.rules.map(({ campo }, index) => {
      let valor = "";
      const campoRegex = campo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

      if(campo.toLowerCase() === "title" || campo.toLowerCase() === "título"){
        valor = titulo;
      }
      else {
        let regex: RegExp;

            if (index === this.rules.length - 1) {
                regex = new RegExp(`^#+\\s*${campoRegex}\\s*\\n([\\s\\S]*)`, 'im');
            } else {
                regex = new RegExp(`^#+\\s*${campoRegex}\\s*\\n([\\s\\S]*?)(?=^#+\\s)`, 'im');
            }
        const campoMatch = this.conteudo.match(regex);
        valor = campoMatch ? campoMatch[1].trim(): "";
      }

      return { campo, valor };
    });

  }

  protected checkRules(valor: string, regra: any): boolean {
    if(!regra){
      return true;
    }

    if(regra?.min !== undefined && valor.length < regra.min){
      return false;
    }
    if(regra?.max !== undefined && valor.length > regra.max){
      return false;
    }

    if(regra.enum ){
      const enums = regra.enum.map((e: string) => e.toLowerCase());
      if(!enums.includes(valor.toLowerCase())){
        return false;
      }
    }

    return true;
  }
    
}