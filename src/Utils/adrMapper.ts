import { Adr } from "../entities/Adr";
import { Categoria } from "../entities/Categoria";
import { Field } from "../entities/Field";
import { Rule } from "../entities/Rule";
import { Template } from "../entities/Template";
import { adrWithRelations } from "../repository/adrRepository";

export class AdrMapper {
  static toDomain(adr: adrWithRelations): Adr {
    const rule = new Rule(
      adr.template.field.rule.id,
      Array.isArray(adr.template.field.rule.regras) ? adr.template.field.rule.regras : []
    );

    const field = new Field(
      adr.template.field.id,
      Array.isArray(adr.template.field.campos) ? adr.template.field.campos : [],
      rule
    );
    rule.setField(field);

    const template = new Template(
      adr.template.id,
      adr.template.nome,
      field
    );
    field.setTemplate(template);

    const categorias = adr.categorias.map(
      c => new Categoria(c.id, c.nome)
    );

    return new Adr(adr.id, adr.nome, template, categorias, adr.substituido ?? false, adr.substituidoPor ?? null);
  }

  static toDomainList(adrs: adrWithRelations[]): Adr[] {
    return adrs.map(this.toDomain);
  }
}
