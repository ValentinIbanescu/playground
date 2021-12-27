// Beginner method
let triangle = "#";
let max = 8;
for (let i = 1; i <= max + 1; i++) {
  console.log(triangle);
  triangle += "#";
  // For empty lines on top and bottom, start from i = 0 and add a new line at the end.
  // if (i == max) triangle += "\n ";
}

// Advanced method
for (let triangle = "#"; triangle.length <= 8; triangle +="#") {
  console.log(triangle);
}
