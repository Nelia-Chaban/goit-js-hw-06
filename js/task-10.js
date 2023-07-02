//Чесно кажучи, я не змогла зробити це завдання сама. Але досить цікаво було розбиратись.
//Маю надію в майбутньому розвязувати такі завдання!

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divEl = document.querySelector("#controls");
console.log(divEl);
const createBtnEl = divEl.querySelector("button[data-create]");
console.log(createBtnEl);
const destroyBtnEl = divEl.querySelector("button[data-destroy]");
console.log(destroyBtnEl);
const boxEl = document.querySelector("#boxes");
console.log(boxEl);

function createBoxes(amount) {
  const boxSize = 30;
  let html = "";
  for (let i = 0; i < amount; i++) {
    const size = boxSize + i * 10;
    const color = getRandomHexColor();
    html += `<div style = "width: ${size}px; height: ${size}px; background-color: ${color}"></div>`;
  }
  boxEl.innerHTML = html;
}

createBtnEl.addEventListener("click", function () {
  const inputEl = divEl.querySelector('input[type="number"]');
  const amount = Number(inputEl.value);
  createBoxes(amount);
});

destroyBtnEl.addEventListener("click", function () {
  boxEl.innerHTML = "";
});
