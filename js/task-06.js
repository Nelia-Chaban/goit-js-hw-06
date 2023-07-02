const inputEl = document.querySelector("#validation-input");
console.log(inputEl);
const inputValidEl = Number(inputEl.dataset.length);
console.log(typeof inputValidEl);

inputEl.addEventListener("blur", checkEnteredSymbol);

function checkEnteredSymbol() {
  if (inputEl.value.length === inputValidEl) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
  }
}
