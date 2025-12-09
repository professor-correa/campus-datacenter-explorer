const carrossels = document.querySelectorAll('.carrossel-container');

carrossels.forEach(container => {
  const carrossel = container.querySelector('.carrossel');
  const nextBtn = container.querySelector('.next');
  const prevBtn = container.querySelector('.prev');
  let index = 0;

  function atualizarCarrossel() {
    const cardWidth = carrossel.querySelector('.card').offsetWidth + 20;
    carrossel.style.transform = `translateX(${-index * cardWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    if(index < carrossel.children.length - Math.floor(container.offsetWidth / (carrossel.children[0].offsetWidth + 20))) {
      index++;
      atualizarCarrossel();
    }
  });

  prevBtn.addEventListener('click', () => {
    if(index > 0){
      index--;
      atualizarCarrossel();
    }
  });

  window.addEventListener('resize', atualizarCarrossel);
});

// ===================== HACKS SUAVE COM TOUCH =====================
const container = document.querySelector(".hack-container");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let hacks = Array.from(document.querySelectorAll(".hack"));
let total = hacks.length;
let current = 0;

const cardContainers = document.querySelectorAll(".card-container");

let targetX = 0;
let currentX = 0;

// ===================== TOUCH =====================
let isDragging = false;
let startX = 0;
let scrollStartX = 0;

container.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX;
  scrollStartX = targetX;
});

container.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].pageX;
  scrollStartX = targetX;
});

container.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const dx = e.pageX - startX;
  targetX = scrollStartX + dx;
});

container.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const dx = e.touches[0].pageX - startX;
  targetX = scrollStartX + dx;
});

container.addEventListener("mouseup", () => {
  isDragging = false;
  centralizarCard();
});

container.addEventListener("touchend", () => {
  isDragging = false;
  centralizarCard();
});

// ===================== CENTRALIZAR CARD =====================
function centralizarCard() {
  const hackWidth = hacks[0].offsetWidth + parseInt(getComputedStyle(container).gap || 0);
  const containerWidth = container.offsetWidth;
  current = Math.round((containerWidth / 2 - targetX - hackWidth / 2) / hackWidth * -1);
  if (current < 0) current = 0;
  if (current >= total) current = total - 1;
  atualizarCarrossel();
}

// ===================== ATUALIZA CARROSSEL =====================
function atualizarCarrossel() {
  hacks.forEach((h, i) => {
    h.classList.remove("destaque");
    h.style.opacity = "0.6";
    const img = h.querySelector("img");
    if (img) img.src = "./../../assets/img/racks/rack_cinza.svg";
  });

  const ativo = hacks[current];
  ativo.classList.add("destaque");
  ativo.style.opacity = "1";
  const imgAtivo = ativo.querySelector("img");
  if (imgAtivo) imgAtivo.src = "./../../assets/img/racks/rack_vermelho.svg";

  const hackWidth = ativo.offsetWidth + parseInt(getComputedStyle(container).gap || 0);
  const containerWidth = container.offsetWidth;
  targetX = -(hackWidth * current - containerWidth / 2 + hackWidth / 2);
}

// ===================== ANIMAÇÃO SUAVE =====================
function animar() {
  currentX += (targetX - currentX) * 0.15;
  container.style.transform = `translateX(${currentX}px)`;
  requestAnimationFrame(animar);
}
animar();

// ===================== BOTÕES =====================
nextBtn.addEventListener("click", () => {
  current = (current + 1) % total;
  atualizarCarrossel();
});

prevBtn.addEventListener("click", () => {
  current = (current - 1 + total) % total;
  atualizarCarrossel();
});

// ===================== CLICK NOS CARDS =====================
hacks.forEach((h, i) => {
  h.addEventListener("click", () => {
    if (i !== current) current = i;
    atualizarCarrossel();
  });
});

cardContainers.forEach((container) => {
  container.addEventListener("click", () => {
    container.classList.toggle("flipped");
  });
});

// ===================== INICIALIZAÇÃO =====================
atualizarCarrossel();
