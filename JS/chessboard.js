let stringChess = "";
for (let i = 0; i < 8; i += 1) {
  // ** Generate a string from 32 # and 32 spaces.
  i % 2 == 0 ? stringChess += " # # # #\n" : stringChess += "# # # # \n";
}
// for (let i = 8; i < 64; i += 9) {
//   stringChess = stringChess.slice(0, i) + "\n" + stringChess.slice(i);
// }
console.log(stringChess);
