/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
	const seenNumbers = new Set();
	// Helper function to calculate the sum of digits in power of 2.
	const calcSum = (number) => {
		let sum = 0;
		while (number > 0) {
			sum += Math.pow(number % 10, 2);
			number = Math.floor(number / 10);
		}
		return sum;
	};

	while (n != 1) {
		if (seenNumbers.has(n)) return false;
		seenNumbers.add(n);
		n = calcSum(n);
	}
	return true;
};

console.log(isHappy(21));
console.log(isHappy(20));
console.log(isHappy(19));
