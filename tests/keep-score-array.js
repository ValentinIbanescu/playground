/* Given an array of integers, keep a total score based on the following:
1. Add 1 point for every even number in the array
2. Add 3 points for every odd umber in the array, except for the
number "5"
3. Add 5 points every time the number "5" appears in the array
Note that 0 is considered even. */

function find_total( my_numbers ) {
	 let total = 0;
	 my_numbers.forEach(num => {
	   if ( num == 5) {
	 total += 5;
	   } else if ( num % 2 == 1 ) {
	 total += 3;
	 } else {
	 total += 1
	 }
   });
	 return total;
}
console.log(find_total([1,2,3,4,5]));
