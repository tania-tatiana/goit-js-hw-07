const submitedButton = document.querySelector('.login-form');

submitedButton.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  const emailName = form.elements.email.name;
  const passwordName = form.elements.password.name;
  const emailValue = form.elements.email.value;
  const passwordValue = form.elements.password.value;
  if (emailValue === '' || passwordValue === '') {
    return alert('All form fields must be filled in');
  }
  const objectOfForm = {
    [emailName]: emailValue.trim(),
    [passwordName]: passwordValue.trim(),
  };
  console.log(objectOfForm);

  form.reset();
});
