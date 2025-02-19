const changeColor = document.querySelector('.change-color');
changeColor.addEventListener('click', event => {
  const changesOfColor = getRandomHexColor();
  document.body.style.backgroundColor = changesOfColor;

  const changeNameOfColor = document.querySelector('.color');
  changeNameOfColor.textContent = changesOfColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
