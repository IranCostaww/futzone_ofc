/*const produtos = [

    // ===============================
    // NACIONAIS
    // ===============================

    {
        nome: "Flamengo 25/26  | Versão Jogador",
        preco: 180.00,
        categoria: "Nacional",
        imagem: "imagens/flamengo26_jogador.jpg"
    },

    {
        nome: "Flamengo 25/26  | Versão Torcedor",
        preco: 140.00,
        categoria: "Nacional",
        imagem: "imagens/flamengo26_torcedor.webp"
    },

    {
        nome: "Corinthians 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Nacional",
        imagem: "imagens/corinthias.jpg",
        estoque:false
    },

    {
        nome: "Palmeiras 26/27 | Versão Torcedor",
        preco: 140.00,
        categoria: "Nacional",
        imagem: "imagens/palmeiras26.jpg"
    },

    {
        nome: "São Paulo 25/26 | Versão Jogador",
        preco: 140.00,
        categoria: "Nacional",
        imagem: "imagens/sp25.webp",
        estoque:false
    },

    {
        nome: "Vasco 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Nacional",
        imagem: "imagens/vasco26.jpg"
    },

    {
        nome: "Bahia 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Nacional",
        imagem: "imagens/bahia.jpg"
    },

    {
        nome: "Atlético Mineiro | Versão Torcedor",
        preco: 140.00,
        categoria: "Nacional",
        imagem: "imagens/atleticominerio25.webp",
        estoque:false
    },

    {
        nome: "Grêmio 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Nacional",
        imagem: "imagens/gremio25.webp",
        estoque:false
    },

    {
        nome: "Internacional 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Nacional",
        imagem: "imagens/internacional25.webp",
        estoque:false
    },

    // ===============================
    // INTERNACIONAIS
    // ===============================

    {
        nome: "Real Madrid 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Internacional",
        imagem: "imagens/real.jpg"
    },

    {
        nome: "Barcelona 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Internacional",
        imagem: "imagens/barcelona.jpg"
    },

    {
        nome: "Manchester City 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Internacional",
        imagem: "imagens/mancity25.webp",
        estoque:false
    },

    {
        nome: "Manchester United 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Internacional",
        imagem: "imagens/manunited25.webp",
        estoque:false
    },

    {
        nome: "Liverpool 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Internacional",
        imagem: "imagens/liverpool25.webp",
        estoque:false
    },

    {
        nome: "Ajax 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Internacional",
        imagem: "imagens/ajax.jpg"
    },

    {
        nome: "Arsenal 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Internacional",
        imagem: "imagens/arsenal26.webp",
        estoque: false
    },

    {
        nome: "Bayern 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Internacional",
        imagem: "imagens/bayern26.webp",
        estoque:false
    },

    {
        nome: "Borussia Dortmund 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Internacional",
        imagem: "imagens/bvb26.webp",
        estoque:false
    },

    {
        nome: "PSG 18 Neymar",
        preco: 180.00,
        categoria: "Internacional",
        imagem: "imagens/psg18.webp",
        estoque:false
    },

    {
        nome: "Juventus 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Internacional",
        imagem: "imagens/jv26.webp",
        estoque:false
    },

    {
        nome: "Milan 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Internacional",
        imagem: "imagens/milan26.webp",
        estoque:false
    },

    {
        nome: "Inter de Milão 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Internacional",
        imagem: "imagens/milao26.webp",
        estoque:false
    },

    // ===============================
    // SELEÇÕES
    // ===============================


    {
        nome:"Brasil 1998 | Versão Torcedor",
        preco: 140.00,
        categoria: "Seleção",
        imagem: "imagens/Brasil98.jpg"
    },

    {
        nome: "Brasil 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Seleção",
        imagem: "imagens/brasil.jpg"
    },

    {
        nome: "Argentina 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Seleção",
        imagem: "imagens/argentina26.webp",
        estoque:false
    },

    {
        nome: "Portugal 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Seleção",
        imagem: "imagens/portugal26.webp",
        estoque: false
    },

    {
        nome: "Alemanha 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Seleção",
        imagem: "imagens/alemanha26.webp",
        estoque:false
    },

    {
        nome: "Espanha 25/26 | Versão Jogador",
        preco: 140.00,
        categoria: "Seleção",
        imagem: "imagens/espanha26.webp",
        estoque:false
    },

    {
        nome: "França 2 25/26 | Versão Torcedor",
        preco: 140.00,
        categoria: "Seleção",
        imagem: "imagens/frança2.jpg",
        estoque:false
    }

];*/

// ---------------------------------------------------------------------------
// Modal de checkout (CEP -> frete -> pagamento) - substitui prompt()/confirm()
// ---------------------------------------------------------------------------

function criarModalCheckout(){

    if (document.getElementById("modal-checkout")) return;

    const estilo = document.createElement("style");
    estilo.textContent = `
        #modal-checkout {
            position: fixed; inset: 0; background: rgba(0,0,0,0.75);
            display: flex; align-items: center; justify-content: center;
            z-index: 9999; font-family: "Figtree", sans-serif;
        }
        #modal-checkout .caixa {
            background: #111; color: white; border: 1px solid #d4af37;
            border-radius: 10px; padding: 24px; width: 90%; max-width: 380px;
            text-align: center;
        }
        #modal-checkout h3 { color: #f7d046; margin: 0 0 14px; }
        #modal-checkout input {
            width: 100%; padding: 10px; border-radius: 6px; border: none;
            margin-bottom: 12px; box-sizing: border-box; font-size: 15px;
        }
        #modal-checkout button {
            width: 100%; padding: 10px; border-radius: 6px; border: none;
            background: #d4af37; color: black; font-weight: bold;
            cursor: pointer; margin-top: 6px;
        }
        #modal-checkout .cancelar {
            background: transparent; color: #aaa; margin-top: 10px;
        }
        #modal-checkout .resumo { text-align: left; font-size: 14px; margin: 10px 0; }
        #modal-checkout .erro { color: #ff6b6b; font-size: 13px; margin-top: 6px; }
    `;
    document.head.appendChild(estilo);

    const modal = document.createElement("div");
    modal.id = "modal-checkout";
    modal.innerHTML = `
        <div class="caixa">
            <h3>Finalizar compra</h3>
            <div id="passo-cep">
                <input type="text" id="input-cep" placeholder="Digite seu CEP" maxlength="9">
                <button id="btn-calcular-frete">Calcular frete</button>
            </div>
            <div id="passo-resumo" style="display:none">
                <div class="resumo" id="texto-resumo"></div>
                <button id="btn-pagar">Ir para pagamento</button>
            </div>
            <div class="erro" id="texto-erro"></div>
            <button class="cancelar" id="btn-cancelar">Cancelar</button>
        </div>
    `;
    document.body.appendChild(modal);
}

function fecharModalCheckout(){
    const modal = document.getElementById("modal-checkout");
    if (modal) modal.remove();
}

// Função única de compra (usada por script.js e produtos.js)
function comprar(nomeCamisa, preco){

    criarModalCheckout();

    const inputCep = document.getElementById("input-cep");
    const btnCalcular = document.getElementById("btn-calcular-frete");
    const btnPagar = document.getElementById("btn-pagar");
    const btnCancelar = document.getElementById("btn-cancelar");
    const passoCep = document.getElementById("passo-cep");
    const passoResumo = document.getElementById("passo-resumo");
    const textoResumo = document.getElementById("texto-resumo");
    const textoErro = document.getElementById("texto-erro");

    let freteCalculado = null;

    btnCancelar.onclick = fecharModalCheckout;

    btnCalcular.onclick = async () => {
        textoErro.textContent = "";
        const cep = inputCep.value.trim();

        if (!cep) {
            textoErro.textContent = "Digite um CEP.";
            return;
        }

        btnCalcular.textContent = "Calculando...";
        btnCalcular.disabled = true;

        try {
            const resposta = await fetch(
                `${API_URL}/api/calcular-frete?cep=${encodeURIComponent(cep)}`
            );
            const frete = await resposta.json();

            if (frete.erro) {
                textoErro.textContent = frete.erro;
                return;
            }

            freteCalculado = frete;
            const total = preco + frete.valor_frete;

            textoResumo.innerHTML = `
                Produto: ${nomeCamisa}<br>
                Frete para ${frete.cidade}/${frete.uf}: R$ ${frete.valor_frete.toFixed(2).replace(".", ",")}<br>
                <strong>Total: R$ ${total.toFixed(2).replace(".", ",")}</strong>
            `;

            passoCep.style.display = "none";
            passoResumo.style.display = "block";

        } catch (erro) {
            textoErro.textContent = "Erro ao consultar o CEP. Tente novamente.";
        } finally {
            btnCalcular.textContent = "Calcular frete";
            btnCalcular.disabled = false;
        }
    };

    btnPagar.onclick = async () => {
        if (!freteCalculado) return;

        btnPagar.textContent = "Abrindo pagamento...";
        btnPagar.disabled = true;

        try {
            const resposta = await fetch(`${API_URL}/api/criar-pagamento`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nome: nomeCamisa,
                    preco: preco,
                    frete: freteCalculado.valor_frete,
                    cidade: freteCalculado.cidade,
                    uf: freteCalculado.uf
                })
            });

            const dados = await resposta.json();

            if (!dados.link_pagamento) {
                textoErro.textContent = "Não foi possível iniciar o pagamento.";
                return;
            }

            window.open(dados.link_pagamento, "_blank");

            // Abre o WhatsApp já com uma mensagem pronta pra o cliente mandar o endereço
            const mensagem =
                `Olá! Acabei de pagar a camisa ${nomeCamisa} (CEP ${freteCalculado.cep}). ` +
                `Segue meu endereço completo com número e complemento: `;
            const linkWhats = `https://wa.me/5573988625840?text=${encodeURIComponent(mensagem)}`;
            window.open(linkWhats, "_blank");

            fecharModalCheckout();

        } catch (erro) {
            textoErro.textContent = "Erro ao conectar com o servidor.";
        } finally {
            btnPagar.textContent = "Ir para pagamento";
            btnPagar.disabled = false;
        }
    };
}