const inputEl = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

let sizes = 30;

createBtn.addEventListener('click', createMarkup);
destroyBtn.addEventListener('click', destroyBoxes);

function createMarkup() {
  if (+inputEl.value < 0 || +inputEl.value > 100) {
    // alert("Invalid value");
    return;
  }

  createBoxes(+inputEl.value);
}

function destroyBoxes() {
  boxes.innerHTML = '';
  inputEl.value = '';
}

function createBoxes(amount) {
  boxes.innerHTML = '';
  inputEl.value = '';
  sizes = 30;

  const arrBoxes = [];

  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement('div');
    newBox.style.width = `${sizes}px`;
    newBox.style.height = `${sizes}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    arrBoxes.push(newBox);

    sizes += 10;
  }

  boxes.append(...arrBoxes);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
