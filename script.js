// Função para alternar o conteúdo
function toggleTexto(botao) {
  const card = botao.closest('.Card');
  const conteudo = card.querySelector('.conteudo-completo') || card.querySelector('.conteudo-completo-radiestesia');
  if (!conteudo) {
    console.warn("Conteúdo não encontrado no card:", card);
    return;
  }

  // Se o card for Radiestesia, usa display. Para os outros, usa classe expandido.
  if (conteudo.classList.contains('conteudo-completo-radiestesia')) {
    if (conteudo.style.display === "none" || conteudo.style.display === "") {
      conteudo.style.display = "block";
      botao.textContent = "👈 Ocultar tipos de radiestesia";
    } else {
      conteudo.style.display = "none";
      botao.textContent = "👉 Clique para conhecer os tipos disponíveis";
    }
  } else {
    conteudo.classList.toggle('expandido');
    botao.textContent = conteudo.classList.contains('expandido') ? "Mostrar menos" : "Mostrar mais";
  }
}

// Oculta o conteúdo só no card de Radiestesia ao carregar
window.addEventListener("DOMContentLoaded", function () {
  const conteudoRadiestesia = document.querySelector("#card-radiestesia .conteudo-completo-radiestesia");
  if (conteudoRadiestesia) {
    conteudoRadiestesia.style.display = "none";
  }
});

// Função para o menu mobile
function toggleMenu() {
  const menu = document.getElementById('menu-list');
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    menu.classList.toggle('show');
  }
}

// Carregar menu externo
fetch('menu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu-container').innerHTML = data;
  });
