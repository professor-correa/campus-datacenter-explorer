const flip = document.querySelectorAll(".flip-card")

flip.forEach(individualCard => {
    individualCard.addEventListener("click", () => {
        individualCard.classList.toggle('flip')
    })
})