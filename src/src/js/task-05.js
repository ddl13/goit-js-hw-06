const inputRef = document.querySelector("#name-input");
const nameRef = document.querySelector("#name-output");

inputRef.addEventListener("input", inputChange);

function inputChange(event) {
  nameRef.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    nameRef.textContent = "Anonymous";
  }
}
