// // 1. Beginner method
// let stringChess = "";
// size = 8;
// // The first loop is handling the addition of rows vertically
// for (let i = 0; i < size; i += 1) {
//   let row = "";
// // The second loop creates the rows horizontally.
//   for (let i = 1; i < size; i += 1) {
//     i % 2 == 0 ? row += " " : row += "#";
//   }
//   i % 2 == 0 ? stringChess += ` ${row}\n` : stringChess += `${row} \n`;
// }
// console.log(stringChess);

// 2. Advanced method.
let stringChess = "";
size = 16;
// The first loop is handling the addition of rows vertically
for (let row = 0; row < size; row += 1) {
// The second loop creates the rows horizontally.
  for (let col = 0; col < size; col += 1) {
    if ((row + col) % 2 == 0 ) {
      stringChess += " ";
    } else {
        stringChess += "#";
    }
  }
  stringChess += "\n";
}
console.log(stringChess);
