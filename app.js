function CriaCartão(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo_pergunta>
    <h3>${categoria}</h3>
    <div class="cartao__conteudo_pergunta">
        <p>${pergunta}</p>
    </div>
<div class="cartao__conteudo__pergunta">
    <p>${resposta}</p>
    </div>
    </div>
    `

    let respostaEstaVisivel = false

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    cartao.assEventListener('click', viraCartao)


    container.appendChild(cartao)

}