function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const bodyEl = document.querySelector("body");
const changeColorButton = document.querySelector('.change-color');
const spanForColor = document.querySelector('.color');

function changeBackgroundColor() {
  bodyEl.style.backgroundColor = getRandomHexColor(); 
  spanForColor.textContent = getRandomHexColor();
}

changeColorButton.addEventListener("click", changeBackgroundColor);