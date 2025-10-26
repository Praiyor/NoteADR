import { Adr } from "../entities/Adr";
import { Validator } from "./Validator";
import * as vscode from 'vscode';

export type ValidationError = {
  campo: string;
  mensagem: string;
}

export type ValidationResult = {
  valido: boolean;
  erros: ValidationError[];
}

export class AdrValidator extends Validator<Adr> {

  private diagnosticCollection: vscode.DiagnosticCollection = vscode.languages.createDiagnosticCollection('noteadr');

  constructor() { super(); }

  public async validate(adr: Adr, filePath: string): Promise<ValidationResult> {
    this.loadRules(adr);
    await this.loadFile(filePath);
    this.getValues();

    const erros: ValidationError[] = [];

    for (let i = 0; i < this.rules.length; i++) {
      const { campo, regra } = this.rules[i];
      const { valor } = this.camposValues[i];

      if (!this.checkRules(valor, regra)) {
        erros.push({ campo, mensagem: `Campo "${campo}" inválido` });
      }
    }

    await this.applyDiagnostics(erros, filePath);

    return {
      valido: erros.length === 0,
      erros
    };
  }

  protected loadRules(data: Adr): void {
    if (!data.getTemplate()) {
      throw new Error("Não foi possível recuperar o template");
    }

    const campos = data.getTemplate().getField().getCampos();
    const regras = data.getTemplate().getField().getRule().getRegras();

    this.rules = campos.map((campo: string, index: number) => ({
      campo,
      regra: Array.isArray(regras) ? regras[index] : regras[campo] ?? {}
    }));
  }

  protected getValues(): void {
    if (!this.conteudo || !this.rules.length) {
      vscode.window.showInformationMessage('Erro ao tentar validar o ADR, tente novamente mais tarde.');
      return;
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

      if (campo.toLowerCase() === "title" || campo.toLowerCase() === "título") {
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
        valor = campoMatch ? campoMatch[1].trim() : "";
      }

      return { campo, valor };
    });

  }

  protected checkRules(valor: string, regra: any): boolean {
    if (!regra) {
      return true;
    }

    const valorLower = valor.toLowerCase();

    if (regra.wordCount) {
      const words = valor.trim().split(/\s+/).length;
      const { min, max } = regra.wordCount;
      if ((min && words < min) || (max && words > max)) {
        return false;
      }
    }

    if (regra.enum) {
      const enums = regra.enum.map((e: string) => e.toLowerCase());
      if (!enums.includes(valor.toLowerCase())) {
        return false;
      }
    }

    if (regra.noSpecialChars && /[^a-zA-Z0-9\s]/.test(valor)) {
      return false;
    }

    if (regra.contains) {
      const required = (Array.isArray(regra.contains) ? regra.contains : [regra.contains]).map((w: string) => w.toLowerCase());
      if (!required.some((word: string) => valorLower.includes(word))) {
        return false;
      }
    }

    if (regra.notContains) {
      const forbidden = (Array.isArray(regra.notContains) ? regra.notContains : [regra.notContains]).map((w: string) => w.toLowerCase());
      if (forbidden.some((word: string) => valorLower.includes(word))) {
        return false;
      }
    }

    if (regra.date) {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(valor.trim())) {
        return false;
      }
    }

    return true;
  }

  private async applyDiagnostics(erros: ValidationError[], filePath: string): Promise<void> {
    const uri = vscode.Uri.file(filePath);
    this.diagnosticCollection.delete(uri);

    if (erros.length === 0) {
      return;
    }

    const document: vscode.TextDocument = await vscode.workspace.openTextDocument(uri);

    const text = document.getText();
    const diagnostics: vscode.Diagnostic[] = [];

    for (const erro of erros) {
      const campoRegex = erro.campo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

      const regex = new RegExp(`^#+\\s*${campoRegex}\\s*\\n([\\s\\S]*?)(?=^#+\\s|$)`, 'im');
      const match = text.match(regex);

      if (match && typeof match.index === 'number') {
        const startPos = document.positionAt(match.index);
        const endPos = document.positionAt(match.index + match[0].length);
        const range = new vscode.Range(startPos, endPos);

        const diagnostic = new vscode.Diagnostic(
          range,
          erro.mensagem,
          vscode.DiagnosticSeverity.Error
        );
        diagnostic.source = 'noteADR';
        diagnostics.push(diagnostic);
      } else {
        const range = new vscode.Range(new vscode.Position(0, 0), new vscode.Position(0, 0));
        const diagnostic = new vscode.Diagnostic(
          range,
          erro.mensagem,
          vscode.DiagnosticSeverity.Error
        );
        diagnostic.source = 'noteADR';
        diagnostics.push(diagnostic);
      }
    }

    this.diagnosticCollection.set(uri, diagnostics);
  }

}