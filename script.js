function toggleTexto(botao) {
    const card = botao.closest('.Card');
    const textoExtra = card.querySelector('.conteudo-completo');
  
    textoExtra.classList.toggle('expandido');
  
    if (textoExtra.classList.contains('expandido')) {
      botao.textContent = "Mostrar menos";
    } else {
      botao.textContent = "Mostrar mais";
    }
  }

function toggleMenu() {
  console.log("Cliquei no menu!");
  const menu = document.getElementById('menu-list');
  menu.classList.toggle('show');
}

fetch('menu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu-container').innerHTML = data;
  });git