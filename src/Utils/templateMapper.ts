import { Field } from "../entities/Field";
import { Rule } from "../entities/Rule";
import { Template } from "../entities/Template";
import { templateWithRelations } from "../repository/templateRepository";
import { toRecord } from './utils';

export class TemplateMapper {
  static toDomain(template: templateWithRelations): Template {
    const rule = new Rule(
      template.field.rule.id,
      toRecord(template.field.rule.regras)
    );

    const field = new Field(
      template.field.id,
      toRecord(template.field.campos),
      rule
    );
    rule.setField(field);

    const domainTemplate = new Template(template.id, template.nome, field);
    field.setTemplate(domainTemplate);

    return domainTemplate;
  }

  static toDomainList(templates: templateWithRelations[]): Template[] {
    return templates.map(this.toDomain);
  }
}