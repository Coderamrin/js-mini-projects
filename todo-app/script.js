const input = document.getElementById('input');
const btn = document.getElementById('btn');
const todoItems = document.getElementById('todo-items');

const Todo = () => {
  const item = document.createElement('div');
  const text = document.createElement('p');
  const remove = document.createElement('button');

  text.textContent = input.value;
  remove.textContent = 'X';

  item.classList.add('todo-item');
  remove.classList.add('remove');

  item.append(text, remove);

  if (input.value === '') {
    return;
  } else {
    todoItems.appendChild(item);
    input.value = '';

    item.addEventListener('click', (e) => {
      item.classList.toggle('item-done');
    });

    remove.addEventListener('click', (e) => {
      todoItems.removeChild(item);
    });
  }
};

btn.addEventListener('click', Todo);

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    Todo();
  }
});
