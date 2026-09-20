# Guia de versionamento e fluxo de trabalho

## GitFlow adotado

O repositório utiliza uma estrutura de branches inspirada no GitFlow:

- `main`: contém a versão estável do projeto.
- `develop`: recebe a integração contínua das funcionalidades concluídas.
- `feature/*`: utilizada para implementar novas funcionalidades de forma isolada.
- `hotfix/*`: reservada para correções urgentes originadas a partir da versão estável.

## Fluxo de integração

1. Criar uma branch `feature/*` a partir de `develop`.
2. Implementar e testar a alteração.
3. Abrir Pull Request da `feature/*` para `develop`.
4. Revisar e efetuar o merge.
5. Quando a versão estiver validada, abrir Pull Request de `develop` para `main`.

## Conventional Commits

Exemplos adotados:

- `feat: adiciona funcionalidade`
- `fix: corrige comportamento`
- `docs: atualiza documentação`
- `refactor: reorganiza código sem alterar comportamento`

## Versionamento semântico

O projeto segue o padrão `MAJOR.MINOR.PATCH`:

- MAJOR: mudanças incompatíveis.
- MINOR: novas funcionalidades compatíveis.
- PATCH: correções compatíveis.

A primeira versão estável planejada é `v1.0.0`.
