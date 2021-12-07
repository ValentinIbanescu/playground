// ** INTERPOLATION **
// const weight = 27;
// const message = `Your weight is ${weight}.`;
// console.log(message);

// ** ARRAY ITERATION **
// const nums = [1, 2, 3, 4, 5];
// const toSquare = (nums) => {
//   nums.forEach((num) => {
//     console.log(num ** 2);
//   })
// }
// console.log(toSquare([1, 2, 3, 4, 5]));

// ** OBJECT ITERATION **
// const object1 = {
//   a: 'somestring',
//   b: 42,
//   c: false
// };
// console.log(Object.keys(object1));

// const object1 = {
//   a: 'somestring',
//   b: 42
// };
// for (const [key, value] of Object.entries(object1)) {
//   console.log(`${key}: ${value}`);
// }

// const instruments = { "john": "guitar", "paul": "bass", "ringo": "drums", "george": "guitar" };

// const components = Object.keys(instruments).forEach((beatle) => {
//   console.log(beatle + " played the " + instruments[beatle]);
// });
// console.log(components);

// const instruments = { "john": "guitar", "paul": "bass", "ringo": "drums", "george": "guitar" };
// const componentsBeatles = () => {
//   for (const [key, value] of Object.entries(instruments)) {
//     console.log(`${key} played the ${value}`);
//   }
// }
// console.log(componentsBeatles());

//** STRING TO INTIGER **
// const num = Number.parseInt('42', 10);
// console.log(typeof(num));

// ** RANDOM **
// const rand = Math.floor(Math.random() * 5);
// console.log(rand);

// ** ARRAY CRUD OPERATIONS & DEBUGGER**
// const a = [1, 2, 3, 4, 5];
// console.log(a);
// a.push(9);
// console.log(a);
// console.log(a[4]);
// a[4] = 7;
// console.log(a);

// debugger

// delete a[4];
// console.log(a);
// a.splice(4, 1);
// console.log(a);

// ** OBJECT **
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// };
// console.log(person.age);


// const input = document.getElementById("input");
// const elem = document.querySelectorAll(".input");
// input.addEventListener("keydown", (event) => {
//   // callback(code)
// });

// ** pass information from HTML to JavaScript **
// const boris = document.getElementById('user');
// debugger;
// console.log(boris.dataset.uid);
// // => "2471555"
// console.log(boris.dataset.githubNickname); // Note the auto-camelization of the key!
// // => "Papillard"
// const elem = document.getElementById("element");
// console.log(elem.nodeName);

// ** FUNCTIONS **
// const square = (x) => {
//   return x ** 2;
// };
// const square = (x) => x ** 2;

// console.log(square(5));
// const multiply = (a, b) => a * b;
// console.log(multiply(5, 7));

// ** FACTORIAL **
// var f = [];
// function factorial(n) {
//   if (n == 0 || n == 1)
//     return 1;
//   if (f[n] > 0)
//     return f[n];
//     return f[n] = factorial(n - 1) * n;
//     debugger;
// }
// console.log(factorial(5));

// ** POWER **
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
console.log(power(2, 10));
