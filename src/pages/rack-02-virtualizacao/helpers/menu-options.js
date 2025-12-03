const menuButton = document.querySelector('.menu-button');
const menuOptions = document.querySelector('.menu-options');

menuButton.addEventListener('click', () => {
    menuOptions.classList.toggle('open');
});