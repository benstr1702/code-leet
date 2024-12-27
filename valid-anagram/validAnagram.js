/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
	if (s.length !== t.length) return false;
	const sMap = new Map();
	const tMap = new Map();

	for (const character of s) {
		sMap.set(character, (sMap.get(character) || 0) + 1);
	}
	for (const character of t) {
		tMap.set(character, (tMap.get(character) || 0) + 1);
	}

	for (const [char, count] of sMap) {
		if (tMap.get(char) !== count) {
			return false;
		}
	}
	return true;
};
