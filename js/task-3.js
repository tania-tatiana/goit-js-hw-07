const userName = document.querySelector('#name-input');
userName.addEventListener('input', event => {
  const output = document.querySelector('#name-output');

  const updatedValue = event.target.value.trim();
  if (updatedValue.length === 0 || updatedValue.includes(' ')) {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = updatedValue;
  }
});
