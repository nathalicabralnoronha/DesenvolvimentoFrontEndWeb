import { AppTemplates } from "./templates.js";
import { AppStorage } from "./storage.js";
import { AppValidacao } from "./validacao.js";

document.addEventListener("DOMContentLoaded", () => {
  AppTemplates.renderizarProjetos();
  AppTemplates.renderizarAcoes();
  AppStorage.renderizar();

  const formulario = document.querySelector("#form-cadastro");
  const mensagemFormulario = document.querySelector("#mensagem-form");
  if (!formulario || !mensagemFormulario) return;

  const campos = formulario.querySelectorAll("input, select, textarea");

  const mostrarErroGeral = () => {
    mensagemFormulario.replaceChildren();
    const alerta = document.createElement("div");
    alerta.className = "alert alert-error";
    alerta.setAttribute("role", "alert");
    alerta.innerHTML = "<strong>Verifique o formulário.</strong><p>Existem campos vazios ou preenchidos incorretamente.</p>";
    mensagemFormulario.appendChild(alerta);
  };

  const mostrarSucesso = (nome) => {
    mensagemFormulario.replaceChildren();
    const alerta = document.createElement("div");
    alerta.className = "alert alert-success";
    alerta.setAttribute("role", "status");
    const titulo = document.createElement("strong");
    titulo.textContent = "Cadastro enviado com sucesso!";
    const texto = document.createElement("p");
    texto.textContent = `Obrigado, ${nome}, por querer colaborar com a ONG Esperança Solidária.`;
    alerta.append(titulo, texto);
    mensagemFormulario.appendChild(alerta);
  };

  campos.forEach((campo) => {
    campo.addEventListener("blur", () => {
      campo.dataset.interagiu = "true";
      AppValidacao.validarCampo(campo);
    });
    campo.addEventListener("input", () => {
      if (campo.dataset.interagiu === "true" || campo.value !== "") AppValidacao.validarCampo(campo);
    });
    campo.addEventListener("change", () => {
      campo.dataset.interagiu = "true";
      AppValidacao.validarCampo(campo);
    });
  });

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    let valido = true;
    let primeiroErro = null;
    campos.forEach((campo) => {
      if (!AppValidacao.validarCampo(campo)) {
        valido = false;
        if (!primeiroErro) primeiroErro = campo;
      }
    });
    if (!valido) {
      mostrarErroGeral();
      primeiroErro?.focus();
      return;
    }

    const nome = document.querySelector("#nome").value.trim();
    const campoInteresse = document.querySelector("#interesse");
    const interesse = campoInteresse.options[campoInteresse.selectedIndex].text;
    const registro = { nome, interesse, data: new Date().toLocaleString("pt-BR") };

    if (!AppStorage.adicionar(registro)) {
      mensagemFormulario.innerHTML = '<div class="alert alert-error" role="alert">Não foi possível salvar o histórico neste navegador.</div>';
      return;
    }

    AppStorage.renderizar();
    mostrarSucesso(nome);
  });

  formulario.addEventListener("reset", () => {
    window.setTimeout(() => {
      campos.forEach((campo) => AppValidacao.limparEstadoCampo(campo));
      mensagemFormulario.replaceChildren();
    }, 0);
  });
});
