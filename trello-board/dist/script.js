const addNewCard = document.querySelector('.add-new-card');
const newCard = addNewCard.querySelector('.add__input');
const submitCard = addNewCard.querySelector('.add__btn');
const cardContainer = document.querySelector('.card__container');
const allContainers = document.querySelectorAll('.card__container');

//unique id variable.
let i = 0;

//add new card
submitCard.addEventListener('click', (e) => {
  e.preventDefault();

  const newCardText = newCard.value;

  if (newCardText) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = newCardText;

    // draggable
    card.setAttribute('draggable', 'true');
    card.setAttribute('id', i);
    card.addEventListener('dragstart', onDragStart);

    cardContainer.prepend(card);
    newCard.value = '';
    i++;
  }
});

//drag and drop functionalities.

//add eventlistener to all the containers
allContainers.forEach((container) => {
  container.addEventListener('dragover', onDragOver);
  container.addEventListener('drop', onDrop);
});

function onDragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
}

function onDragOver(e) {
  e.preventDefault();
}

function onDrop(e) {
  const id = e.dataTransfer.getData('text');
  const draggableElement = document.getElementById(id);
  const dropzone = e.target;
  dropzone.appendChild(draggableElement);
  e.dataTransfer.clearData();
}
