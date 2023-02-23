const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingridientsRef = document.querySelector("#ingredients");

// ingredients.forEach((el) => {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = el;
//   itemEl.classList.add("item");

//   ingridientsRef.append(itemEl);
// });

const makeIngredientsList = (nameItem) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = nameItem;
  itemEl.classList.add("item");
  return itemEl;
};
const ingredientsListArr = ingredients.map((el) => makeIngredientsList(el));

ingridientsRef.append(...ingredientsListArr);
