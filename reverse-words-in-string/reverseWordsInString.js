/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
	const res = [];
	let currentWord = "";

	for (let i = 0; i < s.length; i++) {
		if (s[i] !== " ") currentWord += s[i];
		else if (word !== "") {
			res.push(currentWord);
			currentWord = "";
		}
	}
};
