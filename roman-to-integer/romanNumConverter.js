/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
	const romanMap = new Map()
		.set("I", 1)
		.set("V", 5)
		.set("X", 10)
		.set("L", 50)
		.set("C", 100)
		.set("D", 500)
		.set("M", 1000);
	let result = 0;
	for (let index = 0; index < s.length; index++) {
		let currentNumber = romanMap.get(s[index]);
		let nextNumber = romanMap.get(s[index + 1]);

		if (currentNumber < nextNumber) {
			result = result + (nextNumber - currentNumber);
			index++;
		} else {
			result = result + currentNumber;
		}
		console.log("current sum: ", result);
	}
	return result;
};
