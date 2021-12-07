const youCanVote = (age) => {
  if (age >= 18) {
    console.log('You can vote!');
  } else {
    console.log('Sorry! You can\'t vote!');
  }
}

console.log(youCanVote(28));
