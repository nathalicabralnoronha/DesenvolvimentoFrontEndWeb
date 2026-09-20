const CHAVE_STORAGE = "esperancaSolidariaCadastros";
const LIMITE_REGISTROS = 5;

export const AppStorage = {
  carregar() {
    const dados = localStorage.getItem(CHAVE_STORAGE);
    if (!dados) return [];
    try {
      const historico = JSON.parse(dados);
      return Array.isArray(historico) ? historico : [];
    } catch (erro) {
      console.error("Erro ao recuperar histórico:", erro);
      return [];
    }
  },
  salvar(historico) {
    try {
      localStorage.setItem(CHAVE_STORAGE, JSON.stringify(historico));
      return true;
    } catch (erro) {
      console.error("Erro ao salvar histórico:", erro);
      return false;
    }
  },
  adicionar(registro) {
    const historico = this.carregar();
    historico.push(registro);
    return this.salvar(historico.slice(-LIMITE_REGISTROS));
  },
  renderizar() {
    const container = document.querySelector("#historico-cadastros");
    if (!container) return;
    const historico = this.carregar();
    container.replaceChildren();
    if (historico.length === 0) {
      const p = document.createElement("p");
      p.textContent = "Nenhum cadastro armazenado.";
      container.appendChild(p);
      return;
    }
    historico.slice().reverse().forEach((registro) => {
      const artigo = document.createElement("article");
      const titulo = document.createElement("h3");
      titulo.textContent = registro.nome;
      const interesse = document.createElement("p");
      interesse.textContent = `Área de interesse: ${registro.interesse}`;
      const data = document.createElement("small");
      data.textContent = `Registrado em: ${registro.data}`;
      artigo.append(titulo, interesse, data);
      container.appendChild(artigo);
    });
  }
};
