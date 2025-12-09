// ===================== MENU HAMBURGUER =====================
const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

let isMenuOpen = false;
let animating = false;

if (menuBtn && navLinks) {
  const iconImg = menuBtn.querySelector("img");

  menuBtn.addEventListener("click", () => {
    if (animating) return;
    animating = true;

    iconImg.style.transition = "transform 0.15s, opacity 0.15s";

    if (!isMenuOpen) {
      // Abrindo menu
      navLinks.style.display = "flex";
      requestAnimationFrame(() => {
        navLinks.classList.add("show");

        // Fade-out da seta
        iconImg.style.transform = "translateY(10px)";
        iconImg.style.opacity = "0";

        setTimeout(() => {
          iconImg.src = "/src/assets/img/components/arrow.svg";
          // Força o browser aplicar a mudança de src antes do fade-in
          requestAnimationFrame(() => {
            iconImg.style.transform = "translateY(0)";
            iconImg.style.opacity = "1";
          });
        }, 300);
      });

      setTimeout(() => animating = false, 350);

    } else {
      // Fechando menu
      navLinks.classList.remove("show");

      // Fade-out da seta
      iconImg.style.transform = "translateY(10px)";
      iconImg.style.opacity = "0";

      setTimeout(() => {
        // Troca o src **após o fade out** e força o fade in
        iconImg.src = "/src/assets/img/components/menu_hamburger.svg";
        requestAnimationFrame(() => {
          iconImg.style.transform = "translateY(0)";
          iconImg.style.opacity = "1";
        });
      }, 300);

      setTimeout(() => {
        navLinks.style.display = "none";
        animating = false;
      }, 350);
    }

    isMenuOpen = !isMenuOpen;
  });

  // Fecha se clicar fora
  document.addEventListener("click", (e) => {
    if (isMenuOpen && !navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
      menuBtn.click();
    }
  });
}
