const refs = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output')
}

refs.nameInput.addEventListener('input', onInput)


function onInput (event) {
  if (event.currentTarget.value.length >= 1) {
    return refs.nameOutput.textContent = event.currentTarget.value;
  }
  return refs.nameOutput.textContent = 'Anonymous';
}