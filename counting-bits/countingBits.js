/**
 * @param {number} n
 * @return {number[]}
 */

const convertDecToBinary = (dec) => {
	if (dec === 0) return "0";
	if (dec === 1) return "1";
	let dividend = dec;
	let remainder;
	let res = [];
	while (dividend > 0) {
		remainder = dividend % 2;

		res.push(remainder);
		dividend = Math.floor(dividend / 2);
	}
	return res.reverse().join("");
};

const countOnes = (binary) => {
	let count = 0;
	for (let i = 0; i < binary.length; i++) {
		if (binary[i] === "1") count++;
	}
	return count;
};
const countBits = (n) => {
	const res = new Array(n + 1).fill(null);

	for (let i = 0; i < res.length; i++) {
		// For every element of the res array , calculate the binary equivalent
		res[i] = countOnes(convertDecToBinary(i));
	}

	return res;
};

console.log(countBits(2));
