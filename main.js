const button = document.querySelector('button')
const container = document.querySelector('.container')
const sun = document.querySelector('.sun')

button.addEventListener('click', () => {
  sun.classList.toggle('moon')
  container.classList.toggle('night')
  if (sun.classList.contains('moon') || container.classList.contains('night')) {
    button.textContent = 'Включить день'
  } else {
    button.textContent = 'Включить ночь'
  }
})