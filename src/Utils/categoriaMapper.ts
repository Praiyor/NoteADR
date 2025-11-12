
import { categoria } from "../../prisma/client";
import { Categoria } from "../entities/Categoria";

export class CategoriaMapper {
  static toDomain(categoria: categoria): Categoria {
    return new Categoria(categoria.id, categoria.nome);
  }

  static toDomainList(categorias: categoria[]): Categoria[] {
    return categorias.map(this.toDomain);
  }
}