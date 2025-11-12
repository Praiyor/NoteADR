import { Prisma, rule } from "../../prisma/client";
import { Database } from "./Database";

type ruleDTO = {
    regras: Prisma.InputJsonValue,
}


export class ruleRepository {
    private prisma = Database.getInstance().getPrismaClient();

    async create(data: ruleDTO): Promise<rule> {
        return await this.prisma.rule.create({
            data: data
        });
    }

    async findAll(): Promise<rule[]>{
        return await this.prisma.rule.findMany();
    }

    async findById(ruleId: number): Promise<rule | null> {
        return await this.prisma.rule.findUnique({
            where: {
                id: ruleId
            },
        });
    }

    async deleteById(ruleId: number): Promise<void> {
        try {
            await this.prisma.rule.delete({
                where: {
                    id: ruleId
                }
            });
        } catch (error) {
            throw new Error(`Erro deletando rule com id ${ruleId}: ${String(error)}`);
        }
    }

    async updateById(ruleId: number, ruleData: Partial<ruleDTO>, tx?: Prisma.TransactionClient): Promise<rule | null>{
        const client = tx ?? this.prisma;
        try {
            return await client.rule.update({
                where:{
                    id: ruleId
                },
                data: ruleData
            });
        } catch (error) {
            throw new Error(`Erro atualizando rule com id ${ruleId}: ${String(error)}`);
        }
    }
}