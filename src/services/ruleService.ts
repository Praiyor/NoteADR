import { Prisma } from "@prisma/client";

export async function createRule(regras: any, tx: Prisma.TransactionClient) {
  return await tx.rule.create({
    data: { regras }
  });
}