import { Adr } from "../entities/Adr";
import { Categoria } from "../entities/Categoria";
import { adrRepository } from "../repository/adrRepository";
import { categoriaRepository } from "../repository/categoriaRepository";
import { CategoriaMapper } from "../Utils/categoriaMapper";
import * as vscode from 'vscode';

export async function getCategorias(adrId: number): Promise<{ categorias: Categoria[], adrCategorias: number[] }>{
    const repository = await getCategoriaRepository();
    const categoriasPrisma = await repository.findAll();
    const categorias = CategoriaMapper.toDomainList(categoriasPrisma);

    const adrPrisma = await (await getAdrRepository()).findById(adrId);
    const adrCategorias: number[] = adrPrisma?.categorias?.map(c => c.id) ?? [];

    return {categorias, adrCategorias};
}

export async function getCategoriaById(categoriaId: number): Promise<Categoria | undefined>{
    const repository = await getCategoriaRepository();
    const categoriaPrisma = await repository.findById(categoriaId);
    if(!categoriaPrisma){
        vscode.window.showErrorMessage(`Categoria com id ${categoriaId} não foi encontrado`);
        return undefined;
    }

    const categoria = CategoriaMapper.toDomain(categoriaPrisma);

    return categoria;
}

export async function removeCategoria(categoria: Categoria, adr: Adr){
    const repository = await getAdrRepository();
    await repository.removeCategoriaFromAdr(adr.getId(), categoria.getId());
}

export async function addCategoria(categoria: Categoria, adr: Adr){
    const repository = await getAdrRepository();
    await repository.addCategoriaToAdr(adr.getId(), categoria.getId());
}

async function getCategoriaRepository(){
    return new categoriaRepository();
}

async function getAdrRepository(){
    return new adrRepository();
}