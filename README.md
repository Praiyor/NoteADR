# NoteADR — Architecture Decision Records para o VS Code

Extensão para o **Visual Studio Code (VS Code)** desenvolvida para auxiliar na **criação, gerenciamento e validação de Architecture Decision Records (ADRs)**.

Esta extensão foi desenvolvida como parte de um Trabalho de Conclusão de Curso (TCC) de **Igor dos Santos Meurer**.

## Workspace

A extensão **Note ADR** opera em nível de **workspace**, sendo necessário abrir uma pasta como raiz no VS Code para utilizá-la corretamente.  
Todos os dados e arquivos gerados são organizados dentro deste diretório.

## Recursos

O **Note ADR** oferece um conjunto de funcionalidades que simplificam a utilização de ADRs, incluindo:

- Criação de ADRs por meio de uma **interface gráfica**;
- **Adição e gerenciamento de categorias** associadas aos ADRs;
- **Validação automática** dos documentos conforme regras predefinidas;
- **Importação de templates personalizados**;
- **Relações de substituição** entre ADRs (marcando decisões obsoletas).

## Comandos

A extensão disponibiliza os seguintes comandos: 

### `noteadr.iniciarNoteAdr`
Inicializa o ambiente de trabalho do **Note ADR**, criando automaticamente os diretórios necessários (`docs/adr` e `docs/template`) e o banco de dados **SQLite** utilizado pela extensão.  
Um **template base** é gerado para uso inicial.

### `noteadr.abrirMainView`
Abre a **interface principal** da extensão, permitindo:

- Visualizar todos os ADRs criados;
- Abrir ADRs para leitura ou edição;
- Acessar funções de gerenciamento e substituição;
- Importar templates personalizados.

### `noteadr.abrirCriarADRView`
Abre a interface para **criação de um novo ADR** escolhendo entre os templates disponíveis.

## Menus

A extensão adiciona os seguintes menus

- **Abrir NoteADR** — abre a interface principal de gerenciamento;
- **Criar Novo ADR** — abre o formulário de criação de ADR;
- **Gerenciamento de categorias** - abre a interface para adicionar ou remover categorias associadas;
- **Substituir ADR** - permite indicar que um ADR foi substituído por outro.

## Validação de ADRs

O **Note ADR** executa a **validação automática** sempre que um ADR é alterado, assegurando que o documento siga o modelo definido.  
A validação verifica se todos os **campos obrigatórios** estão presentes e devidamente preenchidos, conforme as regras do template associado. 

## Categorias

A extensão permite **gerenciar categorias** armazenadas no banco de dados e associá-las aos ADRs, facilitando sua **organização e filtragem** no painel principal.     

## Substituir ADR

É possível marcar um ADR como **substituído** por outro.  
Quando essa relação é estabelecida, o ADR substituído é destacado visualmente e o ADR substituto é exibido logo abaixo, indicando a continuidade da decisão arquitetural.

## Importar templates

O **Note ADR** possibilita a **importação de templates personalizados** criados pelo usuário, desde que estejam em formato **Markdown** e sigam a estrutura básica esperada, conforme o exemplo a seguir:

```markdown
# Title { "wordCount": { "min": 1, "max": 70 } }

## Status { "enum": ["proposed", "accepted", "rejected", "deprecated", "superseded"] }


## Context { "wordCount": { "min": 5, "max": 1000 }, "notContains": ["lorem", "ipsum"] }


## Decision { "wordCount": { "min": 5, "max": 1000 } }


## Consequences { "wordCount": { "min": 5, "max": 1000 } }
```


Cada campo pode conter **regras de validação** definidas em formato JSON.  
Essas regras orientam a validação automática do ADR, garantindo que os documentos sigam um padrão consistente.

### Regras aceitas pelo Note ADR

A seguir estão listadas todas as regras atualmente reconhecidas pela extensão:

| Regra | Tipo de Valor | Descrição |
|-------|----------------|------------|
| `wordCount` | Objeto `{ "min": number, "max": number }` | Define o número mínimo e máximo de palavras permitido em um campo. |
| `enum` | Lista de strings | Limita os valores possíveis do campo a uma lista específica. |
| `contains` | String ou lista de strings | Exige que o campo contenha determinadas palavras ou expressões. |
| `notContains` | String ou lista de strings | Garante que o campo **não contenha** certas palavras ou expressões. |
| `noSpecialChars` | Boolean (`true`/`false`) | Impede o uso de caracteres especiais no campo. |
| `date` | Boolean (`true`/`false`) | Indica que o campo deve conter uma data. |

Um template é considerado **válido** apenas se possuir ao menos um campo com regras definidas.  

Os templates importados podem ser utilizados como base para a criação de novos ADRs.

## Banco de Dados

A extensão utiliza **SQLite**, integrado via **Prisma ORM**, para armazenar informações como:

- Metadados dos ADRs (status, categorias, validade);
- Estrutura e conteúdo dos templates;
- Relações entre ADRs substituídos.

O banco é criado automaticamente no diretório configurado (por padrão, `docs/`).

## Problemas Conhecidos

- A extensão ainda está em **versão inicial**;  
- Pode haver falhas ocasionais na atualização automática da lista de ADRs após edições externas;  
- Ainda **não há suporte para múltiplos workspaces** simultâneos.

## Autor

**Igor dos Santos Meurer**  
Desenvolvido como parte do Trabalho de Conclusão de Curso — 2025.