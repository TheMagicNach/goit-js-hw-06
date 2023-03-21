const inputRage = document.querySelector('#font-size-control')
const textAbracadabra = document.querySelector('#text')

inputRage.addEventListener('input', () => {
  textAbracadabra.style.fontSize  = `${inputRage.value}px`
})