/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let leftPointer = 0; // Set starting left pointer to 0
	let rightPointer = nums.length - 1; // Set starting left pointer to the last index in the array

	while (leftPointer <= rightPointer) {
		// Calculate mid index
		let midPointer = Math.floor((leftPointer + rightPointer) / 2);

		// Compare the target with the middle element
		if (nums[midPointer] === target) {
			return midPointer; // Match found, return the index
		} else if (nums[midPointer] < target) {
			leftPointer = midPointer + 1; // Search in the right half
		} else {
			rightPointer = midPointer - 1; // Search in the left half
		}
	}

	return -1; // Target not found
};
