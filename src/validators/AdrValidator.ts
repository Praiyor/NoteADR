import { Adr } from "../entities/Adr";
import { Validator } from "./Validator";


export class AdrValidator extends Validator<Adr> {
    constructor() { super(); }
    
    public async validate(adr: Adr, filePath: string): Promise<boolean> {
        this.loadRules(adr);
        await this.loadFile(filePath);
        console.log(`Conteudo do adr: ${this.conteudo}`);
        return true;
    }

    protected loadRules(data: Adr): void{
      let campos: string[] = [];
      let regras: any = {};
      if (data.getTemplate()) {
        campos = data.getTemplate().getField().getCampos();
        regras = data.getTemplate().getField().getRule().getRegras();
      } else {
        throw new Error("Objeto inválido.");
      }
      this.rules = campos.map((campo: string, index: number) => ({
        campo,
        regra: Array.isArray(regras) ? regras[index] : regras[campo] ?? {}
      }));
      console.log(this.rules);
    }
    
}