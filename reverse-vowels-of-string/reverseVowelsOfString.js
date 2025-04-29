/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
	// Helper function to check if a char is a vowel
	function isVowel(char) {
		const vowels = ["a", "e", "i", "o", "u"];
		return vowels.includes(char.toLowerCase());
	}

	if (s.length === 1) return s;
	let sArr = s.split(""); // Convert string to array

	let p1 = 0,
		p2 = sArr.length - 1;
	while (p1 < p2) {
		if (isVowel(sArr[p1]) && isVowel(sArr[p2])) {
			[sArr[p1], sArr[p2]] = [sArr[p2], sArr[p1]];

			p1++;
			p2--;
		} else if (!isVowel(sArr[p1]) && isVowel(sArr[p2])) p1++;
		else if (!isVowel(sArr[p2]) && isVowel(sArr[p1])) p2--;
		else {
			p1++;
			p2--;
		}
	}

	return sArr.join("");
};
