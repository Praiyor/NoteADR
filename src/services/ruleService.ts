import { Prisma } from "@prisma/client";
import { ruleRepository } from "../repository/ruleRepository";

export async function createRule(regras: any, tx: Prisma.TransactionClient) {
  return await tx.rule.create({
    data: { regras }
  });
}

export async function updateRuleById(
  ruleId: number,
  ruleData: Partial<{ regras: Prisma.InputJsonValue }>,
  tx?: Prisma.TransactionClient
) {
  return await (await getRuleRepository()).updateById(ruleId, ruleData, tx);
}

async function getRuleRepository(){
    return new ruleRepository();
}