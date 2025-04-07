/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = (word1, word2) => {
	// Check which string is longer and trim the rest to a new variable to append later
	let leftOvers = "";
	if (word1.length !== word2.length) {
		if (word1.length > word2.length) {
			leftOvers = word1.slice(word2.length);
			word1 = word1.slice(0, word2.length);
		} else {
			leftOvers = word2.slice(word1.length);
			word2 = word2.slice(0, word1.length);
		}
	}

	// Create 2 pointers and set them to the first character of each string
	let p1 = 0;
	let p2 = 0;
	let res = "";

	while (p1 < word1.length && p2 < word2.length) {
		res += word1[p1];
		p1++;
		res += word2[p2];
		p2++;
	}

	res += leftOvers;
	return res;
};

console.log(mergeAlternately("abc", "pqr"));
