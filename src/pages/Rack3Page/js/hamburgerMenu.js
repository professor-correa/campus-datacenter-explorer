// Ryan
let abrir = document.getElementById("hamburgerMenu");
let arrowUp = document.getElementById("arrowUp");
let hamburgerIcon = document.getElementById("hamburgerIcon");
let links = document.getElementById("links");
let header = document.querySelector("header");

// Estado inicial: menu fechado
links.classList.remove("open");
header.classList.add("noGap");
arrowUp.style.display = "none";
hamburgerIcon.style.display = "block";

// Alterna o menu ao clicar
abrir.addEventListener("click", () => {
  if (!links.classList.contains("open")) {
    // Abre menu → volta o gap imediatamente
    links.classList.add("open");
    header.classList.remove("noGap");
    arrowUp.style.display = "block";
    hamburgerIcon.style.display = "none";
  } else {
    // Fecha menu → anima links e gap juntos
    links.classList.remove("open");
    header.classList.add("noGap"); // <<< aplica já aqui
    arrowUp.style.display = "none";
    hamburgerIcon.style.display = "block";
  }
});
