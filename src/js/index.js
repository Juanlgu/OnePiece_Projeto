//1ro seleccionar todo lo usable

const personagens = document.querySelectorAll(".personagem");

//adicionar clase seleccionado cuando el mouse pasar por cima

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    //agora tirar o selecionado del q lo tnga
    tirarBordaAzulDoPersonagem(personagem);

    //trocar a imagem grande
    alterarImagemPersonagem(personagem);

    alterarNomeEDescricaoDoPersonagem(personagem);
  });
});


function tirarBordaAzulDoPersonagem(personagem) {
  const personagemSelecionado = document.querySelector(".selecionado");
  personagemSelecionado.classList.remove("selecionado");

  personagem.classList.add("selecionado");
}

function alterarImagemPersonagem(personagem) {
  const imagemPersonagemGrande = document.querySelector(".personagem-grande");

  const idPersonagem = personagem.attributes.id.value;
  imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function alterarNomeEDescricaoDoPersonagem(personagem) {
  const nomePersonagem = document.getElementById("nome-personagem");
  nomePersonagem.innerText = personagem.getAttribute("data-name");

  const descricaoPersonagem = document.getElementById("descricao-personagem");
  descricaoPersonagem.innerText = personagem.getAttribute("data-description");
}
//quiero hacerlo con gif, y hacer un scroll automatico en telefono disminuyendo los tamanhos de todos los archivos
