/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = (arr) => {
	if (arr.length === 1) return true;
	const map = new Map();
	arr.forEach((num) => {
		map.set(num, (map.get(num) || 0) + 1);
	});

	const occurrences = [...map.values()];
	return new Set(occurrences).size === occurrences.length;
};

uniqueOccurrences([1, 2, 2, 1, 1, 3]);
