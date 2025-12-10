const dropdown = document.querySelector('.dropdown');
const header = dropdown.querySelector('.dropdown-header');

header.addEventListener('click', () => {
    dropdown.classList.toggle('open');
});