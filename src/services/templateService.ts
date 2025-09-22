import { templateRepository } from "../repository/templateRepository";
import { TemplateMapper } from "../Utils/templateMapper";

export async function getTemplates(){
    const repository = await getTemplateRepository();
    const templatesPrisma = await repository.findAll();
    const templates = TemplateMapper.toDomainList(templatesPrisma);

    return templates;
}

async function getTemplateRepository(){
    return new templateRepository();
}