/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
	const strMap = new Map();
	for (let i = 0; i < strs.length; i++) {
		const sortedString = strs[i].split("").sort().join("");
		if (!strMap.has(sortedString)) {
			strMap.set(sortedString, []);
		}
		strMap.get(sortedString).push(strs[i]);
	}

	return [...strMap.values()];
};
