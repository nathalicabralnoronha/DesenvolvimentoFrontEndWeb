# ONG Esperança Solidária — Desenvolvimento Front-End

Projeto acadêmico desenvolvido para a disciplina de Desenvolvimento Front-End, com foco em HTML5 semântico, CSS3, JavaScript modular, acessibilidade, validação de formulários, persistência local, Git/GitHub, build de produção e deploy contínuo.

## Apresentação do projeto

A aplicação representa o site da ONG Esperança Solidária. O objetivo é apresentar a instituição, divulgar projetos e campanhas e permitir o cadastro de voluntários e apoiadores.

## Funcionalidades

- navegação entre Início, Projetos e Cadastro;
- HTML5 semântico e landmarks;
- componentes dinâmicos em JavaScript;
- validação de formulário com HTML5 e JavaScript;
- validação de CPF, telefone e CEP por `pattern`;
- persistência de histórico com `localStorage`;
- módulos ES6 com `import` e `export`;
- navegação por teclado, foco visível e atributos ARIA;
- layout responsivo;
- build de produção com Vite;
- CI/CD com GitHub Actions e GitHub Pages.

## Tecnologias utilizadas

- **HTML5** — estrutura semântica, formulários e acessibilidade;
- **CSS3** — layout, responsividade e estados visuais;
- **JavaScript (Vanilla JS / ES Modules)** — DOM, eventos, templates, validação e persistência;
- **Web Storage API / localStorage** — histórico local;
- **Vite 8.3.0** — bundler e ferramenta de build de produção;
- **Git e GitHub** — versionamento, branches, issues e pull requests;
- **GitHub Actions / GitHub Pages** — integração, build e deploy contínuo.

O código da aplicação não utiliza framework. O Vite é utilizado como ferramenta de desenvolvimento e build.

## Pré-requisitos

- Node.js 22 ou versão compatível;
- npm;
- Git;
- navegador moderno.

## Instalação

Clone o repositório:

```bash
git clone https://github.com/nathalicabralnoronha/DesenvolvimentoFrontEndWeb.git
cd DesenvolvimentoFrontEndWeb
```

Instale as dependências:

```bash
npm install
```

## Execução em desenvolvimento

```bash
npm run dev
```

O Vite inicia um servidor local para desenvolvimento.

## Build de produção

```bash
npm run build
```

O Vite processa e minifica JavaScript e CSS e gera a pasta `dist/`. Em seguida, `scripts/minify-html.mjs` minifica também os arquivos HTML com `html-minifier-terser`. Por fim, `scripts/build-report.mjs` compara os bytes dos arquivos-fonte HTML/CSS/JS com os artefatos finais em `dist` e grava a medição real em `dist/build-report.txt`.

Para testar a versão de produção localmente:

```bash
npm run preview
```

## Roteamento e hospedagem estática

A aplicação é **multi-page (MPA)**, e não uma SPA. Cada rota de navegação corresponde a um arquivo HTML real:

- `/html/index.html`
- `/html/projetos.html`
- `/html/cadastro.html`

Por esse motivo, o GitHub Pages pode servir diretamente cada documento e **não é necessário configurar fallback de SPA para `index.html`**. O arquivo `index.html` da raiz apenas direciona o acesso inicial para `html/index.html`.

## CI/CD e deploy

O workflow `.github/workflows/pages.yml` é executado em cada `push` para a branch `main`.

O pipeline:

1. faz checkout do repositório;
2. configura Node.js;
3. instala as dependências;
4. executa `npm run build`;
5. registra no log o relatório real de tamanho/minificação;
6. envia exclusivamente a pasta `dist/` como artefato;
7. publica o artefato no GitHub Pages.

URL pública:

https://nathalicabralnoronha.github.io/DesenvolvimentoFrontEndWeb/

## Testes e validação

- validação estrutural de HTML;
- testes manuais do formulário;
- inspeção de Console/DevTools;
- testes de navegação e renderização;
- verificação do `localStorage`;
- execução real do build de produção;
- verificação do workflow de deploy no GitHub Actions.

## Estrutura principal

```text
.
├── index.html
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── css/
│   └── style.css
├── js/
│   ├── templates.js
│   ├── storage.js
│   ├── validacao.js
│   └── script.js
├── scripts/
│   ├── minify-html.mjs\n│   └── build-report.mjs
├── package.json
├── vite.config.js
├── .github/
│   └── workflows/
│       └── pages.yml
└── README.md
```

A pasta `dist/` é gerada automaticamente pelo build e representa os artefatos efetivamente publicados em produção.

## Estratégia GitFlow

- `main`: versão estável/publicada;
- `develop`: integração do desenvolvimento;
- `feature/*`: novas funcionalidades e melhorias;
- `hotfix/*`: correções urgentes.

As alterações são integradas por Pull Request antes de chegar à `main`.

## Conventional Commits e versionamento

Exemplos:

- `feat:` nova funcionalidade;
- `fix:` correção;
- `docs:` documentação;
- `refactor:` reorganização interna;
- `build:` configuração de build;
- `ci:` automação de integração/deploy.

O projeto utiliza Semantic Versioning no formato `MAJOR.MINOR.PATCH`.

## Segurança e privacidade

O histórico em `localStorage` não armazena CPF, telefone ou endereço. Apenas nome, área de interesse e data do registro são persistidos para demonstração da funcionalidade.

## Autoria

Projeto acadêmico desenvolvido por **Nathali Cabral Noronha**.
