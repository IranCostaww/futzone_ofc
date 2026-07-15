/*
=========================================================
        CARROSSEL DA PÁGINA INICIAL
=========================================================

Neste arquivo vamos fazer as setinhas dos
carrosséis funcionarem.

Sempre que o usuário clicar na seta:

→ Os produtos deslizam para o lado.

O código funciona para TODOS os carrosséis
existentes na página.

Ou seja, não importa se é:

- Lançamentos
- Mais vendidos
- Seleções

Todos irão funcionar automaticamente.
=========================================================
*/


/*
=========================================================
PEGANDO TODAS AS VITRINES
=========================================================

querySelectorAll()

Procura todos os elementos que possuem
a classe ".vitrine".

O resultado é uma lista contendo:

Vitrine 1

Vitrine 2

Vitrine 3

...
*/

const vitrines = document.querySelectorAll(".vitrine");


/*
=========================================================
PERCORRENDO AS VITRINES
=========================================================

forEach()

Executa o código abaixo para cada vitrine.
*/

vitrines.forEach(vitrine=>{


    /*
    =========================================
        PEGANDO OS ELEMENTOS
    =========================================
    */

    const lista = vitrine.querySelector(".lista-produtos");

    const botaoDireita = vitrine.querySelector(".proximo");

    const botaoEsquerda = vitrine.querySelector(".anterior");


    /*
    =========================================
        BOTÃO DIREITA
    =========================================

    scrollBy()

    Faz a lista andar.

    left: 320

    significa:

    andar 320 pixels para a direita.

    behavior:"smooth"

    faz uma animação suave.
    */

    botaoDireita.addEventListener("click", ()=>{

        lista.scrollBy({

            left:320,

            behavior:"smooth"

        });

    });



    /*
    =========================================
        BOTÃO ESQUERDA
    =========================================

    Valor negativo

    faz voltar.
    */

    botaoEsquerda.addEventListener("click", ()=>{

        lista.scrollBy({

            left:-320,

            behavior:"smooth"

        });

    });

});

function criarCard(produto){

    return `

    <div class="produto">

        <img src="${produto.imagem}" alt="${produto.nome}">

        <h4>${produto.nome}</h4>

        <p>
            R$ ${produto.preco.toFixed(2).replace(".",",")}
        </p>

${
    produto.estoque !== false
    ?
    `<button onclick="comprar('${produto.nome}', ${produto.preco})">
        Comprar
    </button>`
    :
    `<button class="esgotado" disabled>
        Esgotado
    </button>`
}

    </div>

    `;

}

/*
=========================================================
            FUNÇÃO COMPRAR
=========================================================

A função comprar() já vem de dados.js (carregado antes
deste script no HTML), então não precisa ser repetida aqui.
*/


/*
=========================================
PREENCHER AS VITRINES DA HOME
=========================================
*/

const listaLancamentos = document.getElementById("lancamentos");
const listaMaisVendidos = document.getElementById("maisVendidos");

// Só executa se estivermos na Home
if(listaLancamentos && listaMaisVendidos){

    fetch(`${API_URL}/api/produtos`)
        .then(res => res.json())
        .then(produtos => {

            produtos.slice(0,6).forEach(produto=>{
                listaLancamentos.innerHTML += criarCard(produto);
            });

            produtos.slice(6,12).forEach(produto=>{
                listaMaisVendidos.innerHTML += criarCard(produto);
            });

        });
}