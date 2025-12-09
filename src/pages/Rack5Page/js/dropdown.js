document
  .querySelectorAll(".service-document .service-dropdown")
  .forEach((dropdown) => {
    dropdown.addEventListener("click", () => {
      const content = dropdown.nextElementSibling;
      const arrowDown = dropdown.querySelector("img.icon-open");
      const arrowUp = dropdown.querySelector("img.icon-closed");

      content.classList.toggle("open");

      // alterna ícones
      if (content.classList.contains("open")) {
        arrowDown.style.display = "none";
        arrowUp.style.display = "block";
      } else {
        arrowDown.style.display = "block";
        arrowUp.style.display = "none";
      }
    });
  });