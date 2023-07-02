const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");
const itemElArr = ingredients.map((itemData) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = `${itemData}`;
  itemEl.classList.add("item");
  return itemEl;
});
listEl.append(...itemElArr);
