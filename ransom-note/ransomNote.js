/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
	// create a new hash map and set the first character : 1 bc the first character is always gonna be new
	const hashMap = new Map();
	hashMap.set(magazine[0], 1);
	// iterate thru all of the characters in the magazine string and check if they exist in the map , if they do increment the current value by 1 , if they dont set the new value to 1
	for (let i = 1; i < magazine.length; i++) {
		if (hashMap.has(magazine[i])) {
			hashMap.set(magazine[i], hashMap.get(magazine[i]) + 1);
		} else {
			hashMap.set(magazine[i], 1);
		}
	}
	for (let j = 0; j < ransomNote.length; j++) {
		if (hashMap.has(ransomNote[j])) {
			if (hashMap.get(ransomNote[j]) === 1) {
				hashMap.delete(ransomNote[j]);
			} else hashMap.set(ransomNote[j], hashMap.get(ransomNote[j]) - 1);
		} else return false;
	}
	console.log(hashMap);
	return true;
};

canConstruct("note", "nta");
