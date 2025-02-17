/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = (n) => {
	let result = 0;

	// Process all 32 bits
	for (let i = 0; i < 32; i++) {
		// Left shift result by 1 to make room for next bit
		result = (result << 1) | (n & 1);
		// Right shift n by 1 to process next bit
		n = n >>> 1;
	}

	// Convert to unsigned 32-bit integer
	return result >>> 0;
};
