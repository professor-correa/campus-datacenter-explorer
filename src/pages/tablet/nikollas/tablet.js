let abrir = document.getElementById("hamburgerMenu");
let arrowUp = document.getElementById("arrowUp");
let hamburgerIcon = document.getElementById("hamburgerIcon");
let links = document.getElementById("links");
let header = document.querySelector("header");

links.classList.remove("open");
header.classList.add("Gap");
arrowUp.style.display = "none";
hamburgerIcon.style.display = "block";

abrir.addEventListener("click", () => {
    if (!links.classList.contains("open")) {

        links.classList.add("open");
        header.classList.remove("Gap");
        arrowUp.style.display = "block";
        hamburgerIcon.style.display = "none";
    } else {
        links.classList.remove("open");
        arrowUp.style.display = "none";
        hamburgerIcon.style.display = "block";

        links.addEventListener("transitionend", function handler() {
            header.classList.add("Gap");
            links.removeEventListener("transitionend", handler);
        });
    }
});
