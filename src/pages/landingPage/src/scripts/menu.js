const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

let isMenuOpen = false;

if (menuBtn && navLinks) {
  const iconImg = menuBtn.querySelector("images");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    isMenuOpen = navLinks.classList.contains("show");

    iconImg.style.transition = "transform 0.15s, opacity 0.15s";
    iconImg.style.transform = "translateY(10px)";
    iconImg.style.opacity = "0";

    setTimeout(() => {
      iconImg.src = isMenuOpen
        ? "/src/pages/landingPage/src/assets/images/components/arrow.svg"
        : "/src/pages/landingPage/src/assets/images/components/menu_hamburger.svg";

      requestAnimationFrame(() => {
        iconImg.style.transform = "translateY(0)";
        iconImg.style.opacity = "1";
      });
    }, 200);
  });

  document.addEventListener("click", (e) => {
    if (
      isMenuOpen &&
      !navLinks.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      menuBtn.click();
    }
  });
}
