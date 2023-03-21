

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
    const isCreateDiv = document.createElement("div");
    isCreateDiv.style.width = `${sizeDiv}px`;
    isCreateDiv.style.height = `${sizeDiv}px`;
    isCreateDiv.style.backgroundColor = getRandomHexColor();
    isCreateDiv.style.marginLeft = `15px`; 
    isCreateDiv.style.marginBottom = `10px`; 
    arrayForDivs.push(isCreateDiv);
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