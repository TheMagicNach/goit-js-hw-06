const inputLine = document.querySelector("#validation-input");


inputLine.addEventListener('blur', event => {

  const requiredLength = inputLine.getAttribute('data-length');
  const currentLength = event.target.value.length;

  if (currentLength === Number(requiredLength)) {
    inputLine.classList.add('valid');
    inputLine.classList.remove('invalid');
  }
  else {
    inputLine.classList.add('invalid');
    inputLine.classList.remove('valid');
  }
});
