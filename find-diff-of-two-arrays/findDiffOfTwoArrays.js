/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = (nums1, nums2) => {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const onlyIn1 = [...set1].filter((x) => !set2.has(x));
  const onlyIn2 = [...set2].filter((x) => !set1.has(x));

  return [onlyIn1, onlyIn2];
};

console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2])); // Expected output: [[3],[]]
