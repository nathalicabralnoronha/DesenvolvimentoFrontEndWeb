# ONG Esperança Solidária — Desenvolvimento Front-End

Projeto acadêmico desenvolvido para a disciplina de Desenvolvimento Front-End, com foco em HTML5 semântico, CSS3, JavaScript, manipulação do DOM, validação de formulários, persistência local e organização de fluxo de trabalho com Git/GitHub.

## Apresentação do projeto

A aplicação representa o site da ONG Esperança Solidária. O objetivo é apresentar a instituição, divulgar projetos e campanhas, permitir o cadastro de voluntários e apoiadores e demonstrar práticas de desenvolvimento front-end organizadas e acessíveis.

## Funcionalidades

- Navegação entre as áreas de Início, Projetos e Cadastro.
- Estrutura semântica com HTML5.
- Componentes dinâmicos gerados com JavaScript.
- Manipulação do DOM com `querySelector`, `createElement`, `innerHTML` e eventos.
- Validação de formulário com recursos nativos do HTML5 e JavaScript.
- Validação de CPF, telefone e CEP por `pattern`.
- Persistência de histórico com `localStorage`.
- Uso de `JSON.stringify()` e `JSON.parse()` para armazenamento e recuperação de dados.
- Organização do código por responsabilidade.
- Estratégia de versionamento baseada em GitFlow.

## Tecnologias utilizadas

- **HTML5** — estrutura semântica, formulários e acessibilidade.
- **CSS3** — apresentação, responsividade e feedback visual de validação.
- **JavaScript (Vanilla JS)** — DOM, eventos, templates dinâmicos, validação e persistência.
- **Web Storage API / localStorage** — histórico local de cadastros.
- **History API** — apoio à navegação e atualização de rota.
- **Git e GitHub** — versionamento, branches, issues e pull requests.

O projeto não utiliza frameworks ou bibliotecas externas.

## Pré-requisitos

Para executar o projeto é necessário:

- Navegador moderno, como Google Chrome, Microsoft Edge ou Firefox.
- Editor de código, como Visual Studio Code, recomendado para manutenção.
- Git, caso seja necessário clonar ou versionar o projeto.
- Opcionalmente, a extensão **Live Server** do VS Code para executar o projeto em um servidor local.

## Instalação

Clone o repositório:

```bash
git clone https://github.com/nathalicabralnoronha/DesenvolvimentoFrontEndWeb.git
```

Acesse a pasta do projeto:

```bash
cd DesenvolvimentoFrontEndWeb
```

Não há dependências NPM ou bibliotecas externas para instalar.

## Execução

O projeto pode ser aberto diretamente pelo arquivo `index.html`.

Para uma execução local mais próxima de um ambiente web, recomenda-se abrir a pasta no Visual Studio Code e utilizar a extensão **Live Server**.

## Build

Não existe etapa de build, pois o projeto utiliza HTML, CSS e JavaScript puros. Os arquivos podem ser executados diretamente no navegador.

## Testes e validação

A qualidade do projeto é verificada por:

- validação estrutural dos arquivos HTML no **W3C Validator**;
- testes manuais dos campos obrigatórios e padrões do formulário;
- inspeção de erros no Console do navegador;
- verificação de armazenamento na aba Application/Storage do DevTools;
- testes de navegação e renderização dos componentes;
- conferência dos caminhos relativos entre os arquivos.

## Estrutura do projeto

```text
projeto/
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── css/
│   └── styles.css
├── images/
│   └── imagens utilizadas no projeto
├── js/
│   ├── templates.js
│   ├── storage.js
│   ├── validacao.js
│   └── script.js
└── README.md
```

## Estratégia GitFlow

O fluxo de desenvolvimento utiliza:

- `main`: versão estável e pronta para lançamento;
- `develop`: integração do desenvolvimento contínuo;
- `feature/*`: novas funcionalidades criadas a partir de `develop`;
- `hotfix/*`: correções urgentes originadas em `main`.

As funcionalidades são desenvolvidas em branches próprias, revisadas por pull request e integradas primeiro em `develop`. Após validação, a versão consolidada segue para `main`.

## Conventional Commits e versionamento

As mensagens de commit seguem o padrão Conventional Commits, por exemplo:

- `feat: adiciona nova funcionalidade`
- `fix: corrige validação do formulário`
- `docs: atualiza documentação do projeto`
- `refactor: reorganiza código por responsabilidade`

O versionamento segue **Semantic Versioning (MAJOR.MINOR.PATCH)**. A primeira versão estável é identificada como `v1.0.0`.

## Segurança e privacidade

O histórico salvo no `localStorage` é limitado e não armazena dados sensíveis como CPF, telefone e endereço. São mantidas apenas informações necessárias para demonstrar a persistência local da aplicação.

## Autoria

Projeto acadêmico desenvolvido por **Nathali Cabral Noronha** para a disciplina de Desenvolvimento Front-End.
