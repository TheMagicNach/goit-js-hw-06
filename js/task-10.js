

const numberInput = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

createBtn.addEventListener("click", () => createBoxes(numberInput.value));
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount)  {
  let sizeDiv = 30; 
  const arrayForDivs = []

  for (let i = 0; i < amount; i += 1) {
    const createDiv = document.createElement("div");
    createDiv.style.width = `${sizeDiv}px`;
    createDiv.style.height = `${sizeDiv}px`;
    createDiv.style.backgroundColor = getRandomHexColor();
    createDiv.style.marginLeft = `15px` 
    createDiv.style.marginBottom = `10px`; 
    arrayForDivs.push(createDiv)
    sizeDiv += 10;
  }
  boxesDiv.append(...arrayForDivs)
}
function destroyBoxes() {
  boxesDiv.innerHTML = "";
  numberInput.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}