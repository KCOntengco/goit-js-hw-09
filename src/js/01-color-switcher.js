function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 167777215.toString(16))}`;
    //#123456
}

const body = document.querySelector('body')
const startButn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
let colorChangeInterval = null;
stopBtn.disabled = true;

function startColorChange() {
    colorChangeInterval = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }, 1000);
}

function stopColorChange() {
    
}