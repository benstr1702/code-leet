/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
	const trimmed = s.trim().toLowerCase(); // Remove leading and trailing spaces
	const reversed = trimmed.split("").reverse().join(""); // Reverse and join back to string
	return trimmed === reversed; // Compare reversed string with the original
};
