// PEGANDO O ELEMENTO HTML DOS BOTÕES
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

// IDENTIFICANDO O CLICK DO USUÁRIO NO BOTÃO
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    // DESMARCAR BOTÃO ANTERIOR SELECIONADO
    desativarBotaoSelecionado();

    // MARCAR O BOTÃO CLICADO COMO SE ESTIVESSE SELECIONADO
    marcarBotaoSeleciodo(botao);

    // ESCONDER A IMAGEM ANTERIORMENTE SELECIONADA
    esconderImagemAtiva();

    // FAZENDO APARCER A IMAGEM CORRESPONDENTE AO BOTÃO SELECIONADO
    mostrarImagemDeFundo(indice);

    // ESCONDENDO INFORMAÇÕES DO DRAGÃO ANTERIORMENTE SELECIONADO
    escondendoInformacoesAtivas();

    // FAZENDO APARECER AS INFORMAÇÕES CORRESPONDENTES AO DRAÇÃO SELECIONADO
    mostrarInformacoes(indice);
  });
});

function marcarBotaoSeleciodo(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
  informacoes[indice].classList.add("ativa");
}

function escondendoInformacoesAtivas() {
  const informacoesAtiva = document.querySelector(".informacoes.ativa");
  informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
