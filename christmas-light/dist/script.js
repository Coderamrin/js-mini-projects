const lights = document.querySelectorAll('.light');
const even = document.querySelectorAll('.light:nth-child(even)');
const odd = document.querySelectorAll('.light:nth-child(odd)');
const startStop = document.getElementById('start-stop');
const intervalValue = document.getElementById('interval-value');
const intervalSubmit = document.getElementById('interval-submit');

let newVal = intervalValue.value * 100;

let blurInterval = setInterval(function () {
  even.forEach(blur);
  odd.forEach(blur);
}, newVal);

function blur(e) {
  e.classList.toggle('blur');
}

startStop.addEventListener('click', () => {
  if (startStop.textContent == 'Stop') {
    clearInterval(blurInterval);
    startStop.textContent = 'Start';
  } else {
    blurInterval = setInterval(function () {
      even.forEach(blur);
      odd.forEach(blur);
    }, newVal);

    startStop.textContent = 'Stop';
  }
});

//take the interval time from the user. 
intervalSubmit.addEventListener('click', () => {
  newVal = intervalValue.value * 100;
  blurInterval;
});
