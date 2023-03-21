const form = document.querySelector('.login-form')

form.addEventListener('submit', event => {
  event.preventDefault();
  
  const emailLine = form.elements.email.value;
  const passwordLine = form.elements.password.value;

  if (!emailLine || !passwordLine) {
    return alert(" всі поля повинні бути заповнені");
  }

  const loginForm = {
    email: emailLine,
    password: passwordLine,
  };
  
  console.log(loginForm)
  form.reset();
})