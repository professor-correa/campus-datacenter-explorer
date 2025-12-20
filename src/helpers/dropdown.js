// dropdown da services and documentation
document
  .querySelectorAll(".service-documentation .dropdown")
  .forEach((dropdown) => {
    dropdown.addEventListener("click", () => {
      const content = dropdown.nextElementSibling;
      const arrowDown = dropdown.querySelector("images.block");
      const arrowUp = dropdown.querySelector("images.none");

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
