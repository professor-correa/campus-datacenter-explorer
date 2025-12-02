const hotspots = document.querySelectorAll(".imgService");
const popups = document.querySelectorAll(".popUp");
const closeBtns = document.querySelectorAll(".closeBtn");

// Função para esconder todos os popups
function hideAllPopups() {
  popups.forEach(p => p.style.display = "none");
}

// Clique no hotspot → mostra pop-up correspondente
hotspots.forEach(hotspot => {
  hotspot.addEventListener("click", (event) => {
    event.stopPropagation(); // evita que o clique no hotspot seja capturado pelo document
    hideAllPopups();
    const index = hotspot.getAttribute("data-popup");
    popups[index].style.display = "flex"; // usa flex porque o CSS define flexbox
  });
});

// Clique no botão de fechar → esconde pop-up
closeBtns.forEach(btn => {
  btn.addEventListener("click", (event) => {
    event.stopPropagation(); // evita conflito com clique fora
    hideAllPopups();
  });
});

// Clique fora do pop-up → fecha
document.addEventListener("click", (event) => {
  // Se o clique não foi dentro de um pop-up nem em um hotspot
  if (!event.target.closest(".popUp") && !event.target.closest(".imgService")) {
    hideAllPopups();
  }
});
