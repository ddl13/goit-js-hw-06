const categoriesRef = document.querySelector("#categories");

const itemsRef = categoriesRef.querySelectorAll(".item");

console.log(`Number of categories: ${itemsRef.length}`);

itemsRef.forEach((el) => {
  const title = el.querySelector("h2").textContent;

  const elements = el.querySelectorAll("li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});
