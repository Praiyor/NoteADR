import { Template } from "../entities/Template";
import { Validator } from "./Validator";


export class TemplateValidator extends Validator<Template> {
    constructor() { super(); }
    
    public async validate(template: Template, filePath: string): Promise<boolean>  {
        this.loadRules(template);
        return true;
    }
    
    protected loadRules(data: Template): void{

    }

    protected getValues(): void {
        throw new Error("Method not implemented.");
    }

    protected checkRules(valor: string, regra: any): boolean {
        throw new Error("Method not implemented.");
    }
}