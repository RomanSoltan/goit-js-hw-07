const changeColorBtn = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const bgColor = document.querySelector('.color');

changeColorBtn.addEventListener('click', changeColor);

function changeColor() {
  const generateColor = getRandomHexColor();
  bodyEl.style.backgroundColor = generateColor;
  bgColor.textContent = generateColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
