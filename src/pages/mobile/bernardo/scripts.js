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