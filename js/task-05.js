const inputEl = document.querySelector("#name-input");
console.log(inputEl);

const outputEl = document.querySelector("#name-output");
console.log(outputEl);

inputEl.addEventListener("input", showText);

function showText(event) {
  if ((outputEl.textContent = event.currentTarget.value)) {
    return outputEl.textContent;
  } else {
    outputEl.textContent = "Anonymous";
  }
}
