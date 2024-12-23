/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
	let i = 0,
		j = 0;
	while (i < s.length && j < t.length) {
		if (s[i] === t[j]) {
			i++;
		}
		j++;
		console.log("i:", i, "j:", j);
	}
	return i === s.length;
};
