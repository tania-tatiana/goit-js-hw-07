function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonCreate = document.querySelector('#controls button[data-create]');
const buttonDelete = document.querySelector('#controls button[data-destroy]');
const divBoxes = document.querySelector('#boxes');

const input = document.querySelector('input[type="number"]');

buttonCreate.addEventListener('click', event => {
  event.preventDefault();

  divBoxes.innerHTML = '';

  const value = parseInt(input.value, 10);

  function createBoxes(amount) {
    if (amount > 1 && amount <= 100) {
      for (let i = 0; i < amount; i++) {
        const square = document.createElement('div');
        const size = 30 + i * 10;
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
        square.style.backgroundColor = getRandomHexColor();
        divBoxes.append(square);
      }
    }
    input.value = '';
  }
  createBoxes(value);
});
function destroyBoxes() {
  divBoxes.innerHTML = '';
}
buttonDelete.addEventListener('click', () => destroyBoxes());
