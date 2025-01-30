const { botoesCarrossel, informacao, imagens } = pegarElementoHTML();
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativarBotaoSelecionado();
        marcarNovoBotaoSelecionado(botao);
        desativarImagemSelecionada();
        ativarNovaImagemSelecionada(indice);
        desativarInformacaoSelecionada();
        ativarNovaInformacaoSelecionada(indice);

    })

})

function pegarElementoHTML() {
    const botoesCarrossel = document.querySelectorAll(".botao");
    const imagens = document.querySelectorAll(".imagem");
    const informacao = document.querySelectorAll(".informacoes");
    return { botoesCarrossel, informacao, imagens };
}

function ativarNovaInformacaoSelecionada(indice) {
    informacao[indice].classList.add("ativa");
}

function desativarInformacaoSelecionada() {
    const informacaoAtiva = document.querySelector(".informacoes.ativa");
    informacaoAtiva.classList.remove("ativa");
}

function ativarNovaImagemSelecionada(indice) {
    imagens[indice].classList.add("ativa");
}

function desativarImagemSelecionada() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function marcarNovoBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
