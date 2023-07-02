const inputEl = document.querySelector("#font-size-control");
console.log(inputEl);
const inputTextEl = document.querySelector("#text");
console.log(inputTextEl);
function handleInput(event) {
  inputTextEl.style.fontSize = event.currentTarget.value + "px";
}
inputEl.addEventListener("input", handleInput);
//
//
// 2-й спосіб написання функції (який я не розумію, але намагаюсь розібратись)
// function handleInput() {
//   inputTextEl.style.fontSize = `${inputEl.value}px`;
// }
