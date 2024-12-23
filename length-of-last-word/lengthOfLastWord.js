/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
	let newS = s.trim().split(" ");
	return newS[newS.length - 1].length;
};
