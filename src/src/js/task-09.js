const btnChangeColorRef = document.querySelector(".change-color");
const colorNameRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnChangeColorRef.addEventListener("click", (event) => {
  const newColor = getRandomHexColor();

  bodyRef.style.background = newColor;
  colorNameRef.textContent = newColor;
});
