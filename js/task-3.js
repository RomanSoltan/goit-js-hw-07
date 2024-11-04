const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', handler);

function handler() {
  const inputValue = inputEl.value.trim();
  spanEl.textContent = inputValue.length > 0 ? inputValue : 'Anonymous';
}
