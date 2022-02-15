const form = document.getElementById('form');
const input = document.getElementById('input');
const items = document.getElementById('items');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const itemName = input.value;

  const item = createItem(itemName);
  items.prepend(item);
  getAllItems();
});

function createItem(itemName) {
  const item = document.createElement('li');
  item.classList.add('item');
  item.innerHTML = `
  <span class='text'>${itemName}</span>
  <div>
    <button class='edit'>&#9998;</button>
    <button class='remove'>X</button>
  </div>
  `;

  return item;
}

function getAllItems() {
  const allItems = document.querySelectorAll('.item');
  allItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.target.matches('button') && e.target.classList.contains('remove')) {
        items.removeChild(item);
      }

      if (e.target.matches('button') && e.target.classList.contains('edit')) {
        item.children[0].setAttribute('contenteditable', 'true');
      }
    });
  });
}
