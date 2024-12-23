/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
	let left = 0,
		right = height.length - 1,
		max = 0,
		minHeight = 0;
	while (left < right) {
		if (height[left] > height[right]) minHeight = height[right];
		else minHeight = height[left];
		max =
			max > minHeight * (right - left) ? max : minHeight * (right - left);
		if (minHeight === height[left]) left++;
		else right--;
	}
	return max;
};

console.log(maxArea([1, 1]));
