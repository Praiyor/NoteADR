import { Prisma, template } from "@prisma/client";
import { Database } from "./Database";

type TemplateDTO = {
    id?: number,
    nome: string,
    fieldId: number
}

export type templateWithRelations = Prisma.templateGetPayload<{
    include: {field: {include: { rule: true } } }
}>

export class templateRepository {
    private prisma = Database.getInstance().getPrismaClient();

    async create(data: TemplateDTO): Promise<template> {
        return await this.prisma.template.create({
            data: data
        });
    }

    async findAll(): Promise<templateWithRelations[]>{
        return await this.prisma.template.findMany({
            include: {
                field: {include: { rule: true } }
            }
        });
    }

    async findById(templateId: number): Promise<templateWithRelations | null> {
        return await this.prisma.template.findUnique({
            where: {
                id: templateId
            },
            include: {
                field: { include: { rule: true } }
            }
        });
    }

    async deleteById(templateId: number): Promise<void> {
        try {
            await this.prisma.template.delete({
                where: {
                    id: templateId
                }
            });
        } catch (error) {
            throw new Error(`Erro deletando template with id ${templateId}: ${String(error)}`);
        }
    }

    async updateById(templateId: number, templateData: Partial<TemplateDTO>): Promise<template | null>{
        try {
            return await this.prisma.template.update({
                where:{
                    id: templateId
                },
                data: templateData
            });
        } catch (error) {
            throw new Error(`Erro atualizando template with id ${templateId}: ${String(error)}`);
        }
    }
}