/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  if (nums.length === 1) return nums;

  let iterator = 0,
    nonZero = 0;

  while (iterator < nums.length) {
    console.log({ nums, iterator: iterator, nonZero: nonZero });

    // Check if the element on iterator is non-zero
    // If true , swap between the element on non-zero and iterator
    if (nums[iterator] !== 0) {
      //nums[nonZero] = nums[iterator];
      [nums[nonZero], nums[iterator]] = [nums[iterator], nums[nonZero]];
      nonZero++;
    }

    iterator++;
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
