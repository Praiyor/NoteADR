import { field, Prisma } from "@prisma/client";
import { Database } from "./Database";

type fieldDTO = {
    id?: number,
    campos: Prisma.InputJsonValue,
    ruleId: number
}

type fieldWithRelations = Prisma.fieldGetPayload<{
    include: {rule: true}
}>

export class fieldRepository {
    private prisma = Database.getInstance().getPrismaClient();

    async create(data: fieldDTO): Promise<field> {
        return await this.prisma.field.create({
            data: data
        });
    }

    async findAll(): Promise<fieldWithRelations[]>{
        return await this.prisma.field.findMany({
            include: {
                rule: true
            }
        });
    }

    async findById(fieldId: number): Promise<fieldWithRelations | null> {
        return await this.prisma.field.findUnique({
            where: {
                id: fieldId
            },
            include: {
                rule: true
            }
        });
    }

    async deleteById(fieldId: number): Promise<void> {
        try {
            await this.prisma.field.delete({
                where: {
                    id: fieldId
                }
            });
        } catch (error) {
            throw new Error(`Erro deletando field with id ${fieldId}: ${String(error)}`);
        }
    }

    async updateById(fieldId: number, fieldData: Partial<fieldDTO>, tx?: Prisma.TransactionClient ): Promise<field | null>{
        const client = tx ?? this.prisma;
        try {
            return await client.field.update({
                where:{
                    id: fieldId
                },
                data: fieldData
            });
        } catch (error) {
            throw new Error(`Erro atualizando field with id ${fieldId}: ${String(error)}`);
        }
    }
}