import * as vscode from "vscode";
import { PrismaClient } from "@prisma/client";
import { getWorkspaceRootPath } from "../utils";
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
      Database.instance = new Database();
      this.instance.makeDatabasePath();
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
    // 🔹 Cria uma Rule
    const rule = await this.prisma.rule.create({
      data: { regras: { min: 1, max: 10 } }
    });
    console.log("Rule criada:", rule);

    // 🔹 Cria um Field associado
    const field = await this.prisma.field.create({
      data: {
        campos: { tipo: "string" },
        ruleId: rule.id
      }
    });
    console.log("Field criado:", field);

    // 🔹 Cria Template com Field
    const template = await this.prisma.template.create({
      data: {
        nome: "Template de Teste",
        fieldId: field.id
      }
    });
    console.log("Template criado:", template);

    // 🔹 Cria Categoria
    const categoria = await this.prisma.categoria.create({
      data: { nome: "Performance" }
    });
    console.log("Categoria criada:", categoria);

    // 🔹 Cria ADR com Template e Categoria
    const adr = await this.prisma.adr.create({
      data: {
        id: 1,
        nome: "Decisão de Arquitetura",
        templateId: template.id,
        categorias: {
          connect: { id: categoria.id }
        }
      },
      include: {
        template: true,
        categorias: true
      }
    });
    console.log("ADR criado:", adr);

    // 🔹 Lista pra conferir
    const adrs = await this.prisma.adr.findMany({
      include: { template: true, categorias: true }
    });
    console.log("\n📋 ADRs no banco:", JSON.stringify(adrs, null, 2));
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
