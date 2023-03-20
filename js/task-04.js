const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  resultValue: document.querySelector("#value"),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};
let counterValue = 0;


const onDecrementBtn = () => {
  counterValue -= 1;
  refs.resultValue.textContent = counterValue;
}

const onIncrementBtn = () => {
  counterValue += 1;
  refs.resultValue.textContent = counterValue;
};

refs.decrementBtn.addEventListener('click', onDecrementBtn);
refs.incrementBtn.addEventListener('click', onIncrementBtn);