import { adr, Prisma } from "@prisma/client";
import { Database } from "./Database";

type adrDTO = {
    id: number,
    nome: string,
    templateId: number
}

type adrWithRelations = Prisma.adrGetPayload<{
    include: {template: true, categorias: true}
}>

export class adrRepository {
    private prisma = Database.getInstance().getPrismaClient();

    async create({id, nome, templateId} : adrDTO): Promise<adr> {
        const adr =  await this.prisma.adr.create({
            data: {
                id,
                nome,
                template: {
                    connect: { id: templateId }
                }
            }
        });

        return adr;
    }

    async findAll(): Promise<adrWithRelations[]>{
        return await this.prisma.adr.findMany({
            include: {
                template: true,
                categorias: true
            }
        });
    }

    async findById(adrId: number): Promise<adrWithRelations | null> {
        return await this.prisma.adr.findUnique({
            where: {
                id: adrId
            },
            include:{
                template: true,
                categorias: true
            }
        });
    }

    async deleteById(adrId: number): Promise<void> {
        try {
            await this.prisma.adr.delete({
                where: {
                    id: adrId
                }
            });
        } catch (error) {
            throw new Error(`Erro deletando adr with id ${adrId}: ${String(error)}`);
        }
    }

    async updateById(adrId: number, adrData: Partial<adrDTO>): Promise<adr | null>{
        try {
            return await this.prisma.adr.update({
                where:{
                    id: adrId
                },
                data: adrData
            });
        } catch (error) {
            throw new Error(`Erro atualizando adr with id ${adrId}: ${String(error)}`);
        }
    }
}