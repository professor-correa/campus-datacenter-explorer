document.querySelectorAll('.title-dropdown').forEach(function(title) {
  title.addEventListener('click', function(event) {
    const card = title.closest('.card-dropdown');
    const info = card.querySelector('.info-dropdown');
    const arrow = title.querySelector('.click-arrow');
    info.classList.toggle('open');
    arrow.classList.toggle('girar-seta');
    event.stopPropagation();
  });
});

document.querySelectorAll('.icon-dropper1').forEach(function(icon) {
  icon.addEventListener('click', function(event) {
    const card = icon.closest('.content-header');
    const nav = card.querySelector('.nav-header');
    nav.classList.toggle('open');
    // Adiciona a classe de fade
    icon.classList.add('fading');
    setTimeout(function() {
      // Troca o ícone após o fade-out
      if (nav.classList.contains('open')) {
        icon.src = '/src/assets/icons/u_top-arrow-to-top.svg';
      } else {
        icon.src = '/src/assets/icons/u_list-ul.svg';
      }
      // Fade-in
      icon.classList.remove('fading');
    }, 300); // Tempo igual ao transition do CSS
    event.stopPropagation();
  });
});