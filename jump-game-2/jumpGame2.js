/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
	// Edge case: if array has only one element, no jumps needed
	if (nums.length <= 1) return 0;

	let jumps = 0; // Count of jumps taken
	let currentMax = 0; // Max position we can reach from current jump
	let nextMax = 0; // Max position we can reach from next jump

	console.log({
		jumps: jumps,
		currentMax: currentMax,
		nextMax: nextMax,
	});
	console.log("Looping over the nums array...");

	for (let i = 0; i < nums.length - 1; i++) {
		// Update the farthest position we can reach from current position

		nextMax = Math.max(nextMax, nums[i] + i);
		console.log("nextMax:", nextMax);

		if (nextMax >= nums.length - 1) return jumps + 1;
		// If we've reached the limit of our current jump
		if (i === currentMax) {
			console.log("Limit of current jump reached");

			jumps++;
			// Update our current reach to the farthest position found
			currentMax = nextMax;

			// If we can already reach the end, no need to continue
			if (currentMax >= nums.length - 1) {
				break;
			}
		}
	}

	return jumps;
};

// console.log(jump([2, 3, 0, 5, 1, 4]));
