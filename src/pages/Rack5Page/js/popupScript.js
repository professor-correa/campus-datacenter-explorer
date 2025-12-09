const rackButtons = document.querySelectorAll(".rack-button");
const popups = document.querySelectorAll(".popup");

// função para abrir popup com animação
function openPopup(popupElement) {
    popups.forEach(p => {
        p.classList.remove("show", "hide");
        p.style.display = "none";
    });

    popupElement.style.display = "block";

    // força reflow (garante que animação seja aplicada)
    void popupElement.offsetWidth;

    popupElement.classList.add("show");
}

// função para fechar com animação
function closePopup(popupElement) {
    popupElement.classList.remove("show");
    popupElement.classList.add("hide");

    setTimeout(() => {
        popupElement.style.display = "none";
    }, 250); // tempo igual ao transition do CSS
}


// --- abrir ---
rackButtons.forEach(button => {
    button.addEventListener("click", () => {
        const popupName = button.dataset.popup;
        const popupElement = document.querySelector(`.popup[data-popup-id="${popupName}"]`);

        if (!popupElement) {
            console.error("Popup não encontrado:", popupName);
            return;
        }

        openPopup(popupElement);
    });
});


// --- fechar ao clicar no X ---
document.querySelectorAll(".close-popup").forEach(close => {
    close.addEventListener("click", () => {
        const popup = close.closest(".popup");
        closePopup(popup);
    });
});
