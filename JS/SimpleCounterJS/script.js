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
  button.disabled = true;
  count++;
  total = count * 5;
  title.innerText = `${count} cigarette packages`;
  counter.innerText = `${total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`;
  new Promise((resolve) => setTimeout(resolve, 7000))
  .then(() => {
    button.disabled = false;
    button.innerText = "Next";
  });
});
