import * as vscode from "vscode";
import { PrismaClient } from "@prisma/client";
import { getWorkspaceRootPath } from "../Utils/utils";
import path from "path";
import { exec as execCb } from "child_process";
import { promisify } from "util";

const exec = promisify(execCb);

export class Database {
  private static instance: Database;
  private prisma!: PrismaClient;
  private dbPath!: string;

  private constructor() {}

  public static getInstance(): Database {
    if(!Database.instance){
      const db = new Database();
      db.makeDatabasePath();
      Database.instance = db;
    }
    return Database.instance;
  }

  public getPrismaClient(): PrismaClient {
    if(!this.prisma){
      
      process.env.DATABASE_URL = `file:${this.dbPath}`;

      this.prisma = new PrismaClient();
    }

    return this.prisma;
  }

  public async initDatabase() {

    process.env.DATABASE_URL = `file:${this.dbPath}`;

    const prismaSchemaPath = path.resolve(__dirname, "../../prisma/schema.prisma");

    try {
      await exec(`npx prisma db push --schema="${prismaSchemaPath}"`);
      vscode.window.showInformationMessage(`Banco pronto em: ${this.dbPath}`);

      this.getPrismaClient();

      await this.seedDatabase();
    } catch (error: any) {
      vscode.window.showErrorMessage(`Erro ao criar o banco: ${error.message}`);
    }
  }

  private async seedDatabase() {
    const campos = ["Title", "Status", "Context", "Decision", "Consequences"];

    const regras = [
    { wordCount: { min: 1, max: 70 }, noSpecialChars: true },
    { enum: ["proposed", "accepted", "rejected", "deprecated", "superseded"] },
    { wordCount: { min: 5, max: 1000 }, notContains: ["lorem", "ipsum"] },
    { wordCount: { min: 5, max: 1000 }, contains: ["will", "decide"] },
    { wordCount: { min: 5, max: 1000 } }
  ];
      const rule = await this.prisma.rule.create({
        data: { regras }
      });

    const field = await this.prisma.field.create({
      data: {
        campos,
        ruleId: rule.id
      }
    });

    await this.prisma.template.create({
      data: {
        nome: "decision-record",
        fieldId: field.id
      }
    });

    const categorias = ["Performance", "Segurança", "Usabilidade", "Escalabilidade", "Manutenibilidade"];
    const categoriaCriadas = [];

    for (const nome of categorias) {
      const cat = await this.prisma.categoria.create({ data: { nome } });
      categoriaCriadas.push(cat);
    }

  }

  public getDatabaseConfig(): string {
      return vscode.workspace.getConfiguration().get('noteadr.databasePath') ?? 'docs';
  }

  private makeDatabasePath(): void{
    const root = getWorkspaceRootPath();

    if (!root) {
      throw new Error("Nenhum workspace aberto.");
    }

    const path = vscode.Uri.joinPath(root.uri, this.getDatabaseConfig());
    const databaseFilePath = vscode.Uri.joinPath(path, "extension.db");
    this.dbPath = databaseFilePath.fsPath;

  }
}
