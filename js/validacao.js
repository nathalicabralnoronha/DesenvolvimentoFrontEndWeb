export const AppValidacao = {
  obterMensagemErro(campo) {
    if (campo.validity.valueMissing) {
      const mensagens = {
        nome: "Informe seu nome completo.", email: "Informe seu e-mail.",
        nascimento: "Informe sua data de nascimento.", cpf: "Informe seu CPF.",
        telefone: "Informe seu telefone.", cep: "Informe seu CEP.",
        endereco: "Informe seu endereço.", cidade: "Informe sua cidade.",
        estado: "Selecione um estado.", interesse: "Selecione uma área de interesse."
      };
      return mensagens[campo.id] || "Este campo é obrigatório.";
    }
    if (campo.validity.typeMismatch && campo.id === "email") return "Informe um endereço de e-mail válido.";
    if (campo.validity.tooShort && campo.id === "nome") return "O nome deve possuir pelo menos 3 caracteres.";
    if (campo.validity.patternMismatch) {
      if (campo.id === "cpf") return "Digite o CPF no formato 000.000.000-00.";
      if (campo.id === "telefone") return "Digite o telefone no formato (11) 99999-9999.";
      if (campo.id === "cep") return "Digite o CEP no formato 00000-000.";
    }
    return "Verifique o preenchimento deste campo.";
  },
  obterElementoErro(campo) {
    const idErro = `erro-${campo.id}`;
    let elemento = document.querySelector(`#${idErro}`);
    if (!elemento) {
      elemento = document.createElement("small");
      elemento.id = idErro;
      elemento.className = "field-error";
      elemento.setAttribute("aria-live", "polite");
      campo.insertAdjacentElement("afterend", elemento);
      campo.setAttribute("aria-describedby", idErro);
    }
    return elemento;
  },
  validarCampo(campo) {
    const mensagem = this.obterElementoErro(campo);
    if (!campo.validity.valid) {
      campo.classList.remove("campo-valido");
      campo.classList.add("campo-invalido");
      campo.setAttribute("aria-invalid", "true");
      mensagem.textContent = this.obterMensagemErro(campo);
      return false;
    }
    campo.classList.remove("campo-invalido");
    campo.removeAttribute("aria-invalid");
    if (campo.required || campo.value.trim() !== "") campo.classList.add("campo-valido");
    else campo.classList.remove("campo-valido");
    mensagem.textContent = "";
    return true;
  },
  limparEstadoCampo(campo) {
    campo.classList.remove("campo-valido", "campo-invalido");
    campo.removeAttribute("aria-invalid");
    delete campo.dataset.interagiu;
    const mensagem = document.querySelector(`#erro-${campo.id}`);
    if (mensagem) mensagem.textContent = "";
  }
};
