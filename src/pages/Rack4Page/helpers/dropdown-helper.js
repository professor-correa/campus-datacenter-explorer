const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const header = dropdown.querySelector('.dropdown-header');

    header.addEventListener('click', () => {
        dropdown.classList.toggle('open');
    });
});