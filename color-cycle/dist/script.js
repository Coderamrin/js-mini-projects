const previewBox = document.getElementById('preview-box');
const button = document.getElementById('button');
const inputs = document.querySelectorAll('input');

let red = inputs[0];
let green = inputs[1];
let blue = inputs[2];

button.addEventListener('click', () => {
  const userHex = `#${red.value}${green.value}${blue.value}`;
  previewBox.style.backgroundColor = userHex;
});
