// ===================== CARÔMETRO 3D =====================
const participantes = [
  { nome: "Prof° Lucas Corrêa", foto: "/src/pages/LandingPage/src/assets/img/peoples/carometro/LucasCorrea.jpg"},
  { nome: "Profª Fiama Brenda", foto: "/src/pages/LandingPage/src/assets/img/peoples/carometro/FiamaBrenda.webp" },
  { nome: "Prof° Wellington", foto: "/src/pages/LandingPage/src/assets/img/peoples/pessoa.svg" },
  { nome: "Prof° Matias", foto: "/src/pages/LandingPage/src/assets/img/peoples/pessoa.svg" },
  { nome: "Prof° Carlos Fabbri", foto: "/src/pages/LandingPage/src/assets/img/peoples/pessoa.svg" }
];

const carometro = document.getElementById("carometro");
let angulo = 0;
const totalP = participantes.length;

participantes.forEach((p, i) => {
  const div = document.createElement("div");
  div.classList.add("participante");
  div.style.transform = `rotateY(${(360 / totalP) * i}deg) translateZ(300px)`;
  div.innerHTML = `<img src="${p.foto}" alt="${p.nome}"><p>${p.nome}</p>`;
  carometro.appendChild(div);
});

setInterval(() => {
  angulo += 360 / totalP;
  document.querySelectorAll(".participante").forEach((el, i) => {
    el.style.transform = `rotateY(${(360 / totalP) * i - angulo}deg) translateZ(300px)`;
    const rot = ((360 / totalP) * i - angulo) % 360;
    el.classList.toggle("tras", rot > 180 && rot < 360);
  });
}, 2500);

const wrapper = document.querySelector('.carometro-wrapper');
const btnPrev = document.querySelector('.caro-btn.prev');
const btnNext = document.querySelector('.caro-btn.next');


  // Rolagem automática
  let scrollPosition = 0;
  setInterval(() => {
    scrollPosition += 100;
    wrapper.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });

    if (scrollPosition >= wrapper.scrollWidth - wrapper.clientWidth) {
      scrollPosition = 0;
    }
  }, 1800);

// ===================== AJUSTE DINÂMICO DO CARÔMETRO =====================
function ajustarRaioCarometro() {
  const carometro = document.querySelector('.carometro');
  const participantes = document.querySelectorAll('.participante');

  if (!carometro || participantes.length === 0) return;

  const larguraTela = window.innerWidth;
  let raioBase = 300;

  // ajusta o raio conforme o tamanho da tela
  if (larguraTela < 380) raioBase = 120;
  else if (larguraTela < 500) raioBase = 150;
  else if (larguraTela < 700) raioBase = 200;
  else if (larguraTela < 900) raioBase = 250;

  participantes.forEach(part => {
    part.style.transformOrigin = `center center -${raioBase}px`;
  });
}

// executa ao carregar e ao redimensionar
window.addEventListener('load', ajustarRaioCarometro);
window.addEventListener('resize', ajustarRaioCarometro);
