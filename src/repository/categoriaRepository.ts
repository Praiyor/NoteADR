import { Database } from "./Database";
import { Categoria } from '../entities/Categoria';
import { categoria } from "../../prisma/client";

type categoriaDTO = {
    id?: number,
    nome: string
}

export class categoriaRepository {
    private prisma = Database.getInstance().getPrismaClient();

    async create(data: categoriaDTO): Promise<categoria> {
        return await this.prisma.categoria.create({
            data: data
        });
    }

    async findAll(): Promise<categoria[]>{
        return await this.prisma.categoria.findMany();
    }

    async findById(categoriadId: number): Promise<categoria | null> {
        return await this.prisma.categoria.findUnique({
            where: {
                id: categoriadId
            }
        });
    }

    async deleteById(categoriadId: number): Promise<void> {
        try {
            await this.prisma.categoria.delete({
                where: {
                    id: categoriadId
                }
            });
        } catch (error) {
            throw new Error(`Erro deletando field with id ${categoriadId}: ${String(error)}`);
        }
    }

    async updateById(categoriadId: number, CategoriaData: Partial<categoriaDTO>): Promise<categoria | null>{
        try {
            return await this.prisma.categoria.update({
                where:{
                    id: categoriadId
                },
                data: CategoriaData
            });
        } catch (error) {
            throw new Error(`Erro atualizando field with id ${categoriadId}: ${String(error)}`);
        }
    }
}