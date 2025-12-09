// ===================== HACKS SUAVE (VERSÃO ANTIGA) =====================
const container = document.querySelector(".hack-container");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let hacks = Array.from(document.querySelectorAll(".hack"));
let total = hacks.length;
let current = 0;

const cardContainers = document.querySelectorAll(".card-container");

function atualizarCarrossel() {
  hacks.forEach((h, i) => {
    h.classList.remove("destaque");
    h.style.opacity = "0.6";
    h.querySelector("img").src = "/src/pages/LandingPage/src/assets/img/racks/rack_cinza.svg";
  });

  const ativo = hacks[current];
  ativo.classList.add("destaque");
  ativo.style.opacity = "1";
  ativo.querySelector("img").src = "/src/pages/LandingPage/src/assets/img/racks/rack_vermelho.svg";

  const hackWidth = ativo.offsetWidth + parseInt(getComputedStyle(container).gap || 0);
  const containerWidth = container.offsetWidth;
  const desloc = -(hackWidth * current - containerWidth / 2 + hackWidth / 2);

  container.style.transform = `translateX(${desloc}px)`;
}

// Botões de navegação
nextBtn.addEventListener("click", () => {
  current = (current + 1) % total;
  atualizarCarrossel();
});

prevBtn.addEventListener("click", () => {
  current = (current - 1 + total) % total;
  atualizarCarrossel();
});

// Clique direto nos hacks
hacks.forEach((h, i) => {
  h.addEventListener("click", () => {
    if (i !== current) current = i;
    atualizarCarrossel();
  });
});

// Flip dos cards
cardContainers.forEach((container) => {
  container.addEventListener("click", () => {
    container.classList.toggle("flipped");
  });
});

// Inicialização
atualizarCarrossel();

// Força TODOS os racks a ficarem vermelhos no mobile logo ao carregar
if (window.matchMedia("(max-width: 700px)").matches) {
  hacks.forEach((hack) => {
    hack.classList.add("destaque");
    hack.style.opacity = "1";
    hack.querySelector("img").src = "/src/pages/LandingPage/src/assets/img/racks/rack_vermelho.svg";
  });
}
