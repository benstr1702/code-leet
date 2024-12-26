/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
	if (pattern.length !== s.split(" ").length) return false;
	s = s.trim().split(" ");
	const patternToString = new Map();
	const stringToPattern = new Map();
	for (let i = 0; i < pattern.length; i++) {
		let charPattern = pattern[i];
		let charS = s[i];
		if (
			patternToString.has(charPattern) &&
			patternToString.get(charPattern) !== charS
		)
			return false;
		if (
			stringToPattern.has(charS) &&
			stringToPattern.get(charS) !== charPattern
		)
			return false;
		patternToString.set(charPattern, charS);
		stringToPattern.set(charS, charPattern);
	}
	return true;
};

console.log(wordPattern("aaaa", "dog cat cat dog"));
