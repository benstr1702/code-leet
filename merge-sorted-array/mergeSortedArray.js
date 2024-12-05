/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
	let p1 = m - 1;
	let p2 = n - 1;
	let megaPointer = m + n - 1;
	while (p2 >= 0) {
		if (p1 >= 0 && nums1[p1] > nums2[p2]) {
			nums1[megaPointer] = nums1[p1];
			p1--;
		} else {
			nums1[megaPointer] = nums2[p2];
			p2--;
		}
		megaPointer--;
	}
};
console.time();
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
console.timeEnd();
