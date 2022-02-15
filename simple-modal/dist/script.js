const hide = document.getElementById('hide');
const show = document.getElementById('show');
const modal = document.getElementById('modal');

hide.addEventListener('click', (e) => {
  modal.classList.add('modal_hide');
});

show.addEventListener('click', (e) => {
  modal.classList.toggle('modal_hide');
});
