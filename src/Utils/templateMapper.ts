import { Field } from "../entities/Field";
import { Rule } from "../entities/Rule";
import { Template } from "../entities/Template";
import { templateWithRelations } from "../repository/templateRepository";

export class TemplateMapper {
  static toDomain(template: templateWithRelations): Template {
    const rule = new Rule(
      Array.isArray(template.field.rule.regras) ? template.field.rule.regras : []
    );
    rule.setId(template.field.rule.id);

    const field = new Field(
      Array.isArray(template.field.campos) ? template.field.campos : [],
      rule
    );
    field.setId(template.field.id);
    rule.setField(field);

    const domainTemplate = new Template(template.nome, field);
    domainTemplate.setId(template.id);
    field.setTemplate(domainTemplate);

    return domainTemplate;
  }

  static toDomainList(templates: templateWithRelations[]): Template[] {
    return templates.map(this.toDomain);
  }
}