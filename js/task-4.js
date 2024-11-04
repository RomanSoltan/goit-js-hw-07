const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elems = event.target.elements;

  if (!elems.email.value || !elems.password.value) {
    alert('All form fields must be filled in');
    return;
  }

  const info = {
    email: elems.email.value.trim(),
    password: elems.password.value.trim(),
  };

  console.log(info);
  event.target.reset();
}
