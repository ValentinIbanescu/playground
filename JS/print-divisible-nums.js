// for (let number = 1; number <= 30; number++) {
//   if (number % 3 === 0 && number % 5 === 0) {
//     console.log("Fizz-Buzz");
//   } else if (number % 3 === 0) {
//       console.log("Fizz");
//   } else if (number % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(number);
//   }
// }

// let numsArray = [...Array(31).keys()].slice(1);
// numsArray.map(number => {
//   if (number % 3 === 0 && number % 5 === 0) {
//     console.log("Fizz-Buzz");
//   } else if (number % 3 === 0) {
//     console.log("Fizz");
//   } else if (number % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(number);
//   }
// })

// for (let number = 1; number <= 30; number++) {
//   let string = (number) => {
//     if (number % 3 === 0 && number % 5 === 0) {
//       word = "FizzBuzz";
//     } else if (number % 3 === 0) {
//         word = "Fizz";
//     } else if (number % 5 === 0) {
//         word = "Buzz";
//     } else {
//         word = number.toString();
//     }
//     return word;
//   }
//   console.log(string(number));
// };

// for (let number = 1; number <= 30; number++) {
//   let string = (number) => {
//     if (number % 3 === 0 && number % 5 === 0) {
//       word = "FizzBuzz";
//     } else if (number % 3 === 0) {
//         word = "Fizz";
//     } else if (number % 5 === 0) {
//         word = "Buzz";
//     } else {
//         word = number.toString();
//     }
//     return word;
//   };
//   if (number % 3 === 0 || number % 5 === 0) {
//     console.log(string(number));
//   } else {
//       console.log(number);
//   }
// }

// for (let number = 1; number <= 30; number++) {
//   let string = (number) => {
//     let word = "";
//     if (number % 3 === 0 && number % 5 === 0) {
//         word = "FizzBuzz";
//     } else if (number % 3 === 0) {
//         word = "Fizz";
//     } else if (number % 5 === 0) {
//         word = "Buzz";
//     } else {
//         return
//     }
//     return word;
//   }
//   string(number) ? console.log(string(number)) : console.log(number);
// }
for (let num = 1; num <= 30; num++) {
  let string = "";
  if (num % 3 == 0) string += "Fizz";
  if (num % 5 == 0) string += "Buzz";
  console.log(string || num);
}
