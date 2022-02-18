const sliders = document.querySelectorAll('.slider');
const borderBox = document.querySelector('.border-box');
const radiusValue = document.getElementById('value');
const copyValue = document.getElementById('copy');

const values = {
  topLeft: 0,
  topRight: 0,
  bottomLeft: 0,
  bottomRight: 0,
};

//range inputs event listeners.
sliders.forEach((slider) => {
  slider.addEventListener('change', handleChange);
});

//copy to clipboard button event listener
copyValue.addEventListener('click', copyToClipBoard);

//range inputs event handlers
function handleChange(e) {
  const topLeft = e.target.classList.contains('top-left');
  const topRight = e.target.classList.contains('top-right');
  const bottomLeft = e.target.classList.contains('bottom-left');
  const bottomRight = e.target.classList.contains('bottom-right');

  if (topLeft) {
    values.topLeft = e.target.value;
    addBR();
  } else if (topRight) {
    values.topRight = e.target.value;
    addBR();
  } else if (bottomLeft) {
    values.bottomLeft = e.target.value;
    addBR();
  } else if (bottomRight) {
    values.bottomRight = e.target.value;
    addBR();
  }

  copyValue.classList.remove('copied');
  copyValue.classList.add('copy');
  copyValue.textContent = 'Copy';
}

// clipboard event handler
function copyToClipBoard(e) {
  const text = `border-radius: ${radiusValue.innerHTML}`;
  navigator.clipboard.writeText(text);
  e.target.textContent = 'Copied!';
  copyValue.classList.add('copied');
}

//add border radius function. adds border radius to border box.
function addBR(unit = '%') {
  const tl = values.topLeft;
  const tr = values.topRight;
  const bl = values.bottomLeft;
  const br = values.bottomRight;

  borderBox.style.borderRadius = `${tl}${unit} ${tr}${unit} ${br}${unit} ${bl}${unit}`;
  radiusValue.innerHTML = `${tl}${unit} ${tr}${unit} ${br}${unit} ${bl}${unit}`;
}
