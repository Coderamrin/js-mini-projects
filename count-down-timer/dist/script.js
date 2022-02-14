const countDownDate = new Date('Feb 25, 2022 10:0:0').getTime();

var calculateTime = setInterval(function () {
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  updateDom(days, hours, minutes, seconds, timeleft);
}, 1000);

function updateDom(days, hours, minutes, seconds, timeleft) {
  const timer = document.getElementById('timer');

  if (timeleft < 0) {
    clearInterval(calculateTime);
    timer.innerHTML = 'Times UP';
  }

  timer.innerHTML = `
  <div>
  <span class="number">${days}</span>
  <span class="label">days</span>
  </div>
  <div>
  <span class="number">${hours}</span>
  <span class="label">hours</span>
  </div>
  <div>
  <span class="number">${minutes}</span>
  <span class="label">Minutes</span>
  </div>
  <div>
  <span class="number">${seconds}</span>
  <span class="label">seconds</span>
  </div>
  `;
}
