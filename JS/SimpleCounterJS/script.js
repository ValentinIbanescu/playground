let total = 0;
let count = 0;

let button = document.querySelector("a");
let counter = document.querySelector("span");
let title = document.querySelector(".card-title");
console.log(button);
button.addEventListener("click", (event) => {
  console.log(event);
  count++;
  total = count * 5;
  title.innerText = `${count} cigarette packages`;
  counter.innerText = `${total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}`;
})
