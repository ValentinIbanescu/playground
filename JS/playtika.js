
// https://syncfiddle.net/fiddle/-MvxCWYmd8Pwvr1339Gt

function calculateTotalPayment(months, amountDue, interest) {
	if (months == 0) {
    return amountDue;
  }
	console.log(`months = ${months}`);
  console.log(`amountDue = ${amountDue}`);
  months--;
	let newAmount = amountDue + (amountDue * interest);
	return calculateTotalPayment(months, newAmount, interest);
}

console.log(calculateTotalPayment(3, 100, 0.1)); //133.1
console.log(calculateTotalPayment(5, 100, 0.1)); //156.4
