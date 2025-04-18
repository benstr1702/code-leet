/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = (str1, str2) => {
	if (str1 + str2 !== str2 + str1) return "";
	if (str1 === str2) return str1;

	let str1Length = str1.length;
	let str2Length = str2.length;

	function calculateGCD(a, b) {
		//console.log("a:", a, "b:", b);
		let remainder;
		while (b !== 0) {
			remainder = a % b;
			(a = b), (b = remainder);
		}
		return a;
	}

	let gcdLength = calculateGCD(str1Length, str2Length);
	return str1.slice(0, gcdLength);
};

console.log(gcdOfStrings("ABCABC", "ABC"));
