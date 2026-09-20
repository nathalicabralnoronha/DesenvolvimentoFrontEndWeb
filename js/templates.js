export const AppTemplates = {
  projetos: [
    { titulo: "Voluntariado", categoria: "Participação", descricao: "Participação em eventos sociais, campanhas, organização de doações e ações comunitárias." },
    { titulo: "Campanha de alimentos", categoria: "Doações", descricao: "Arrecadação de alimentos não perecíveis para famílias em situação de vulnerabilidade." },
    { titulo: "Campanha de roupas", categoria: "Solidariedade", descricao: "Arrecadação de roupas, cobertores e itens essenciais destinados às ações sociais da ONG." }
  ],
  acoes: [
    { titulo: "Seja voluntário", descricao: "Participe das atividades sociais e contribua com seu tempo e conhecimento." },
    { titulo: "Faça uma doação", descricao: "Contribua com alimentos, roupas, itens de higiene ou apoio financeiro." },
    { titulo: "Divulgue as campanhas", descricao: "Ajude a ampliar o alcance das ações compartilhando as campanhas da ONG." }
  ],
  renderizarProjetos() {
    const container = document.querySelector("#lista-projetos");
    if (!container) return;
    container.innerHTML = this.projetos.map((projeto) => `
      <article class="projeto-card">
        <span class="badge badge-info">${projeto.categoria}</span>
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>
      </article>`).join("");
  },
  renderizarAcoes() {
    const container = document.querySelector("#lista-acoes");
    if (!container) return;
    container.innerHTML = this.acoes.map((acao) => `
      <article class="acao-card"><h3>${acao.titulo}</h3><p>${acao.descricao}</p></article>`).join("");
  }
};
