const buques = [
  { nome: "Buquê de Rosas Vermelhas", categoria: "rosas", preco: "R$ 110,00", descricao: "Buquê com 11 rosas vermelhas e 7 bombons Ouro Branco(podendo mudar para Sonho de Valsa e a cor da rosa).\n\n Tamanho Do Buquê:Grande", imagem: "rosa_vermelha_bombom.jpg" },
  { nome: "Buquê de Rosas Verdes", categoria: "rosas", preco: "R$ 110,00", descricao: "Buquê com 11 rosas verdes e 7 bombons Sonho de Valsa (podendo mudar para Ouro Branco e a cor da rosa).\n\n Tamanho Do Buquê:Grande", imagem: "rosa_verde_bombom.jpg" },
  {nome: "Buquê de Rosas Brancas e Flores Azuis",categoria: "rosas",preco: "R$ 70,00",descricao: "Buquê com rosas brancas decoradas com flores azuis.\n\nTamanho:Médio",imagem: "buque_do_thiago.jpg"},
  { nome: "Buquê de Rosas Laranjas", categoria: "rosas", preco: "R$ 110,00", descricao: "Buquê com 11 rosas laranjas e 7 bombons Ouro Branco (podendo mudar para Sonho de Valsa e a cor da rosa).\n\n Tamanho Do Buquê:Grande", imagem: "bomboms_rosalaranja.jpg" },
  { nome: "Buquê de Rosa Verde e Bombons", categoria: "rosas", preco: "R$ 55,00", descricao: "Buquê de uma rosa verde com 7 bombons Ouro Branco(podendo mudar para Sonho de Valsa e a cor da rosa).\n\n Tamanho Do Buquê:Médio", imagem: "bomboms_rosaverde.jpg" },
  { nome: "Buquê de Rosa Amarela e Bombons", categoria: "rosas", preco: "R$ 55,00", descricao: "Buquê de uma rosa amarela e 7 bombons ouro Branco(podendo mudar para Sonho de Valsa e a cor da rosa).\n\n Tamanho Do Buquê:Médio.", imagem: "bomboms_rosaamarela.jpg" },
  { nome: "Buquê de Rosa Vermelha e Bombons", categoria: "rosas", preco: "R$ 55,00", descricao: "Buquê de uma rosa vermelha e 7 bombons Ouro Branco(podendo mudar para Sonho de Valsa e a cor da rosa).\n\n Tamanho Do Buquê:Médio", imagem: "boobom-rosavermelha_nomeio.jpg" },
  { nome: "Buquê de Rosas Brancas e Roxas", categoria: "rosas", preco: "R$ 85,00", descricao: "Buquê com 4 rosas brancas e 5 roxas.\n\n Tamanho Do Buquê:Médio", imagem: "rosas_branco_roxo.jpg" },
  { nome: "Buquê de Rosas Roxas", categoria: "rosas", preco: "R$ 55,00", descricao: "Buquê de 7 rosas roxas.\n\n Tamanho Do Buquê:Pequeno", imagem: "seterosas_roxo.jpg" },
  {nome: "Buquê de Rosas Azuis com Bombom",categoria: "rosas",preco: "R$ 55,00",descricao: "Buquê de rosas azuis e bombom no centro.\n\nTamanho:Médio",imagem: "buque_da_claudia.jpg"},
  { nome: "Buquê de Rosas Roxas e Bombom", categoria: "rosas", preco: "R$ 55,00", descricao: "Buquê com 5 rosas roxas e 1 bombom.\n\n Tamanho Do Buquê:Pequeno", imagem: "5rosas_bombom_nomeio.jpg" },
  { nome: "Buquê de Rosas Azuis com Glitter", categoria: "rosas", preco: "R$ 135,00", descricao: "Buquê com 20 rosas azuis e glitter.\n\n Tamanho Do Buquê:Grande", imagem: "20rosas_azulglitter.jpg" },
  { nome: "Buquê da Princesa Tiana", categoria: "rosas", preco: "R$ 135,00", descricao: "Buquê com rosas verdes e rosas inspirado na princesa Tiana.\n\n Tamanho Do Buquê:Grande", imagem: "20rosas_tiana.jpg" },
  { nome: "Buquê de Borboletas Roxas", categoria: "borboletas", preco: "R$ 55,00", descricao: "Buquê de borboletas roxas.\n\n Tamanho Do Buquê:Médio", imagem: "borboleta_roxa.jpg" },
  {nome: "Buquê de Borboletas Rosa",categoria: "borboletas",preco: "R$ 55,00",descricao: "Buquê de borboletas rosas.\n\nTamanho:Médio",imagem: "buque_borboletas_rosas.jpg"},
  { nome: "Buquê de Borboletas Van Gogh", categoria: "borboletas", preco: "R$ 55,00", descricao: "Buquê de borboletas inspirado em Van Gogh.\n\n Tamanho Do Buquê:Médio", imagem: "borboleta_vangogh.jpg" },
  { nome: "Buquê de Borboletas Azuis", categoria: "borboletas", preco: "R$ 55,00", descricao: "Buquê de borboletas azuis.\n\n Tamanho Do Buquê:Médio", imagem: "borboleta_azul.jpg" },
  { nome: "Buquê do Messi", categoria: "personalizados", preco: "R$ 65,00", descricao: "Buquê personalizado com o Messi.\n\n Tamanho Do Buquê:Médio", imagem: "personalizado_messi.jpg" },
  { nome: "Caixinha Personalizada", categoria: "personalizados", preco: "R$ 55,00", descricao: "Caixinha com 4 fotos e bombom(podendo aumentar a quantidade de bombons).\n\n Tamanho:Médio", imagem: "caixinha.jpg" },
  { nome: "Roda-Gigante com Fotos", categoria: "personalizados", preco: "R$ 55,00", descricao: "Roda-gigante com 8 fotos.\n\n Tamanho:Médio", imagem: "roda_gigante.jpg" }
  ];

const catalogo = document.getElementById("catalogo");
const botoesFiltro = document.querySelectorAll(".filter-btn");
const numeroWhatsApp = "5512991270956";

function exibirBuques(lista) {
  catalogo.innerHTML = "";

  lista.forEach((buque) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${buque.imagem}" alt="${buque.nome}" class="card-img">
      <h3>${buque.nome}</h3>
    `;

    card.addEventListener("click", () => abrirDetalhes(buque));

    catalogo.appendChild(card);
  });
}

botoesFiltro.forEach(botao => {
  botao.addEventListener("click", () => {
    const filtro = botao.dataset.filter;

    if (filtro === "todos") {
      exibirBuques(buques);
    } else if (filtro === "login") {
      abrirModal();
    } else {
      const filtrados = buques.filter(b => b.categoria === filtro);
      exibirBuques(filtrados);
    }
  });
});

exibirBuques(buques);

const modalDetalhes = document.getElementById("detalhes-modal");
const detImg = document.getElementById("det-img");
const detTitulo = document.getElementById("det-titulo");
const detDesc = document.getElementById("det-desc");
const detPreco = document.getElementById("det-preco");
const detWhats = document.getElementById("det-whats");
const fecharDetalhes = document.querySelector(".fechar-detalhes");

  function abrirDetalhes(b) {
    detImg.src = b.imagem;
    detTitulo.textContent = b.nome;
    detDesc.innerHTML = b.descricao.replace(/\n/g, "<br>");
    detPreco.textContent = b.preco;
  
    let tipoProduto = "produto";
  
    if (b.categoria === "rosas" || b.categoria === "borboletas") {
      tipoProduto = "buquê";
    } else if (b.categoria === "personalizados") {
      tipoProduto = "produto personalizado";
    }
  
    const mensagem = encodeURIComponent(
      `Olá! Gostaria de adquirir este ${tipoProduto}: ${b.nome}`
    );
  
    detWhats.href = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
  
    modalDetalhes.style.display = "flex";
  }

fecharDetalhes.addEventListener("click", () => {
  modalDetalhes.style.display = "none";
});

modalDetalhes.addEventListener("click", (e) => {
  if (e.target === modalDetalhes) {
    modalDetalhes.style.display = "none";
  }
});

const btnLogin = document.getElementById('btn-login');
const modalLogin = document.getElementById('login-modal');
const closeModal = document.querySelector('.close');
const form = document.getElementById('formulario-cadastro');

function abrirModal() {
  modalLogin.style.display = 'block';
}

btnLogin.addEventListener('click', abrirModal);

closeModal.addEventListener('click', () => {
  modalLogin.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modalLogin) {
    modalLogin.style.display = 'none';
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Cadastro enviado com sucesso!');
  form.reset();
  modalLogin.style.display = 'none';
});
