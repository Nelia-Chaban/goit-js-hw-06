const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  const formData = Object.fromEntries(new FormData(formEl));

  if (email.value === "" && password.value === "") {
    alert("Please fill in all the fields!");
  }

  console.log(formData);
  event.currentTarget.reset();
}

///Рішення завдання з певною валідацією, та повідомленням про помилку
//під час введення невалідних даних (по лекції викладача)
//
//
// const formEl = document.querySelector(".login-form");
// const validEmail = "chaban@gmail.com";
// const validPassword = "QazWsx";
// const containerEl = document.querySelector("body");
// console.log(containerEl);
// console.log(formEl);
// function validForm(event) {
//   console.log(event.currentTarget.elements);
//   event.preventDefault();
//   const { email, password } = event.currentTarget.elements;
//   if (email.value === validEmail && password.value === validPassword) {
//     const titleEl = document.createElement("h2");
//     titleEl.textContent = "Login success!";
//     formEl.remove();
//     containerEl.append(titleEl);
//   } else if (email.value === "" && password.value === "") {
//     alert("Please fill in all the fields!");
//   } else {
//     const errorEl = formEl.querySelector(".error");
//     if (errorEl) return;
//     const errorMessageEl = `<div class = "error">Email or password is incorrect! Try again!</div>`;
//     const buttonSubmitEl = formEl.querySelector("button");
//     buttonSubmitEl.insertAdjacentHTML("beforebegin", errorMessageEl);
//     event.currentTarget.reset();
//   }
// }
// formEl.addEventListener("submit", validForm);
