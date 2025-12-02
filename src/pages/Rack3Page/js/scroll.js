// Scroll suave para links internos + fechar o menu hamburguer ao clicar num link
// Seleciona todos os links do header que apontam para IDs
document.querySelectorAll('#links a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Pega o ID do destino
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    // Faz o scroll suave
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Fecha o menu hamburguer
    const headerNav = document.getElementById("links");
    const hamburgerMenu = document.getElementById("hamburgerMenu");

    // Remove classe "open" ou aplica estilo de fechar
    headerNav.classList.remove("open");
    hamburgerMenu.classList.remove("active");
    links.classList.remove("open");
    header.classList.add("noGap"); // <<< aplica já aqui
    arrowUp.style.display = "none";
    hamburgerIcon.style.display = "block";
  });
});
