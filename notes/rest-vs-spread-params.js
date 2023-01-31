function add (...nums) { // rest operator
    // see rest vs spread parameters - https://gomakethings.com/rest-parameters-vs.-the-spread-operator-in-vanilla-javascript/
    /* A rest parameter is a function parameter that gets assigned an array with any arguments that are passed in at or after it when a function is called. */
    nums //?
	// Make sure there are numbers
	if (!nums.length) return 0;

	// Get the first number and remove it from the array
    // removes the first element from an array and returns that removed element.
	let total = nums.shift();

    total //?
    nums //?

	// Loop through each number and do math
	for (let num of nums) {
		total = total + num;
	}

	// Return the total
	return total;

}

add(2,3) //?