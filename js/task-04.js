let counterValue = 0;

const btnIncreamentRef = document.querySelector(
  "button[data-action=increment]"
);

const btnDecrementRef = document.querySelector("button[data-action=decrement]");

const valueRef = document.querySelector("#value");

btnIncreamentRef.addEventListener("click", () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});

btnDecrementRef.addEventListener("click", () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});
