import { adr, Prisma } from "@prisma/client";
import { Database } from "./Database";

type adrDTO = {
    id: number,
    nome: string,
    templateId: number,
    substituido?: boolean,
    substituidoPor?: number| null
    valido?: boolean
}

export type adrWithRelations = Prisma.adrGetPayload<{
  include: {
    template: {
      include: { field: { include: { rule: true } } };
    };
    categorias: true;
  };
}>;

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
                template: {
                    include: {
                        field: { include: { rule: true } }
                    }
                },
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
                template: { include: { field: { include: { rule: true } } } },
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

    async updateById(adrId: number, adrData: Partial<adrDTO>): Promise<adr>{
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

    async removeCategoriaFromAdr(adrId: number, categoriaId: number) {
        return await this.prisma.adr.update({
            where: { id: adrId },
            data: {
                categorias: { disconnect: { id: categoriaId } }
            }
        });
    }
    
    async addCategoriaToAdr(adrId: number, categoriaId: number) {
        return await this.prisma.adr.update({
            where: { id: adrId },
            data: {
                categorias: { connect: { id: categoriaId } }
            }
        });
    }
}