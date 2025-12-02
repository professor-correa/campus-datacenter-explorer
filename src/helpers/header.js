// Header
// Menu expansível acessível
const toggle = document.getElementById('menuToggle');
const header = document.querySelector('.site-header');
toggle?.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    header.classList.toggle('menu-open');
});