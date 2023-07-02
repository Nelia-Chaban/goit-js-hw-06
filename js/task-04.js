const counter = document.querySelector("#counter");
const decrementBtn = counter.querySelector('[data-action="decrement"]');
const incrementBtn = counter.querySelector('[data-action="increment"]');
const valueEl = counter.querySelector("#value");
let counterValue = 0;

function handleClick() {
  valueEl.textContent = counterValue;
}
decrementBtn.addEventListener("click", function () {
  counterValue -= 1;
  handleClick();
});
incrementBtn.addEventListener("click", function () {
  counterValue += 1;
  handleClick();
});

// Приклад з лекції
// const counter = {
//   value: 0,
//   increment() {
//     this.value += 1;
//   },
//   decrement() {
//     this.value -= 1;
//   },
// };
// const decrementBtn = document.querySelector('button[data-action="decrement"]');
// console.log(decrementBtn);
// const incrementBtn = document.querySelector('button[data-action="increment"]');
// console.log(incrementBtn);
// const counterValue = document.querySelector("#value");
// console.log(counterValue);

// const handleClickDecr = () => {
//   counter.decrement();
//   console.log(counter);
//   counterValue.textContent = counter.value;
// };
// decrementBtn.addEventListener("click", handleClickDecr);

// counter.decrement();
// console.log(counter);

// const handleClickIncr = () => {
//   counter.increment();
//   console.log(counter);
//   counterValue.textContent = counter.value;
// };
// incrementBtn.addEventListener("click", handleClickIncr);
