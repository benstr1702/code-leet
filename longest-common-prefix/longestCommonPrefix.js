var longestCommonPrefix = function (strs) {
	let first = strs[0];

	for (let i = 0; i < first.length; i++) {
		// For each character position
		for (let str of strs) {
			// Check all strings at this position

			if (str[i] !== first[i]) {
				// As soon as we find a mismatch, return what we found so far
				return first.slice(0, i);
			}
		}
	}
	// If we get here, the entire first string is a prefix
	return first;
};

longestCommonPrefix(["flower", "flow", "flight"]);

//Input: strs = ["flower","flow","flight"]
//Output: "fl"
