const menuEl = document.querySelector("#categories");
const menuItemsEl = menuEl.children.length;
console.log(`Number of categories: ${menuItemsEl}`);

const itemEl = menuEl.querySelectorAll(".item");

itemEl.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li").length;
  console.log(`Category : ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
