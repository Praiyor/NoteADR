
import { Prisma } from "../../prisma/client";
import { fieldRepository } from "../repository/fieldRepository";

export async function createField(fields: any, tx: Prisma.TransactionClient) {
  return await tx.field.create({
    data: { campos: fields.campos, ruleId: fields.ruleId }
  });
}

export async function updateFieldById(
  fieldId: number,
  fieldData: Partial<{ campos: Prisma.InputJsonValue; ruleId?: number }>,
  tx?: Prisma.TransactionClient
) {
  return await (await getFieldRepository()).updateById(fieldId, fieldData, tx);
}

async function getFieldRepository(){
    return new fieldRepository();
}