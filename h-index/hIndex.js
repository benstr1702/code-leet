/**
 * @param {number [] } citations
 * @return {number}
 */

const hIndex = (citations) => {
	const n = citations.length;
	const count = new Array(n + 1).fill(0);

	for (const citation of citations) {
		count[Math.min(citation, n)]++;
	}

	let papers = 0;
	for (let i = n; i >= 0; i--) {
		papers += count[i];
		if (papers >= i) {
			return i;
		}
	}

	return 0;
};
function countingSort(arr) {
	// Step 1: Find the maximum value in the array
	const max = Math.max(...arr);

	// Step 2: Create a counting array of size max+1, initialized with zeros
	const count = new Array(max + 1).fill(0);

	// Step 3: Count occurrences of each element
	for (let i = 0; i < arr.length; i++) {
		count[arr[i]]++;
	}

	// Step 4: Reconstruct the sorted array
	const sortedArray = [];
	for (let i = 0; i <= max; i++) {
		if (count[i] > 0) {
			console.log(`Number ${i} appears ${count[i]} times`);
		}
		for (let j = 0; j < count[i]; j++) {
			sortedArray.push(i);
			console.log(`Pushed ${i} into sortedArray`);
		}
	}

	return sortedArray;
}
