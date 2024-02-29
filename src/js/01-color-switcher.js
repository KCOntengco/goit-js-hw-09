const body = document.querySelector('body');
const start = document.querySelector('button[data-start]');
const stop = document.querySelector('button[data-stop]');
let timerId = null;

stop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

start.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  if ((start.disabled = true)) {
    stop.disabled = false;
  }
});

stop.addEventListener('click', () => {
  clearInterval(timerId);
  if ((stop.disabled = true)) {
    start.disabled = false;
  }
});