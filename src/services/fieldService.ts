import { Prisma } from "@prisma/client";

export async function createField(fields: any, tx: Prisma.TransactionClient) {
  return await tx.field.create({
    data: { campos: fields.campos, ruleId: fields.ruleId }
  });
}