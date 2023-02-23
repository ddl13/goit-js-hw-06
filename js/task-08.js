const form = document.querySelector(".login-form");

// const emailInput = document.querySelector("input[name=email]");
// const passwordInput = document.querySelector("input[name=password]");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    alert("Поля мають бути заповнені");
  } else {
    const data = {
      email,
      password,
    };
    console.log(data);
  }

  form.reset();
}
