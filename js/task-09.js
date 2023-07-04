function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector("body");
const buttonEl = bodyEl.querySelector(".change-color");
const textEl = bodyEl.querySelector(".color");

bodyEl.addEventListener("click", handleClick);

function handleClick(event) {
  bodyEl.style.backgroundColor = getRandomHexColor(event);
  textEl.textContent = bodyEl.style.backgroundColor;
}
