import { Adr } from "../entities/Adr";
import { Categoria } from "../entities/Categoria";
import { Field } from "../entities/Field";
import { Rule } from "../entities/Rule";
import { Template } from "../entities/Template";
import { adrWithRelations } from "../repository/adrRepository";

export class AdrMapper {
  static toDomain(adr: adrWithRelations): Adr {
    const rule = new Rule(
      Array.isArray(adr.template.field.rule.regras) ? adr.template.field.rule.regras : []
    );

    rule.setId(adr.template.field.rule.id);

    const field = new Field(
      Array.isArray(adr.template.field.campos) ? adr.template.field.campos : [],
      rule
    );
    field.setId(adr.template.field.id);
    rule.setField(field);

    const template = new Template(
      adr.template.nome,
      field,
      []
    );
    
    template.setId(adr.template.id);
    field.setTemplate(template);

    const categorias = adr.categorias.map(
      c => new Categoria(c.id, c.nome)
    );

    return new Adr(adr.id, adr.nome, template, categorias, adr.substituido ?? false, adr.substituidoPor ?? null, adr.valido ?? false);
  }

  static toDomainList(adrs: adrWithRelations[]): Adr[] {
    return adrs.map(this.toDomain);
  }
}
