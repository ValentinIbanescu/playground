let total = 0;
let count = 0;

let button = document.querySelector("#go-btn");
let counter = document.querySelector("span");
let title = document.querySelector(".card-title");
console.log(button);
button.addEventListener("click", (event) => {
  console.log(event);
  event.preventDefault();
  button.innerText = "Wait";
  let state = button.disabled;
  state = true;
  console.log(state);
  count++;
  total = count * 5;
  title.innerText = `${count} cigarette packages`;
  counter.innerText = `${total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`;
  new Promise((resolve) => setTimeout(resolve, 5000))
  .then(() => {
    button.innerText = "Next";
    state = false;
    console.log(state);
  });
});
