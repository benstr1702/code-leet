function isIsomorphic(s, t) {
	if (s.length !== t.length) return false;
	const sToT = new Map();
	const tToS = new Map();

	for (let i = 0; i < s.length; i++) {
		const charS = s[i];
		const charT = t[i];

		// Check for consistency in both mappings
		if (sToT.has(charS) && sToT.get(charS) !== charT) return false;
		if (tToS.has(charT) && tToS.get(charT) !== charS) return false;
		console.log("both match");

		// Add mappings if they don't exist
		sToT.set(charS, charT);
		tToS.set(charT, charS);
		console.log("sToT:", sToT);
		console.log("tToS:", tToS);
	}

	return true;
}

console.log(isIsomorphic("paper", "title"));
