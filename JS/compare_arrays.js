// Compare two arrays, return indices of common elements in appearance order
let primaryArray = ["E", "F", "G", "A", "B", "C", "D", "A"]; // master array
let secondaryArray = ["A", "E", "X"]; // sample data

let findIndeces = (secondaryArray) => {
  // Start with an empty arrray
  let indeces = [];
  // Iterate over each element of the sample array
  secondaryArray.forEach((element) => {
    // Iterate over master array and return the indices of the matching items
    primaryArray.map((item, index) => {
      if (element === item) {
        indeces.push(index);
      }
    });
  });
  return indeces;
};
// Log result
console.log(findIndeces(secondaryArray));
