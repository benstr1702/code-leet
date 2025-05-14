/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
  if (nums.length === 1) return 0;
  const prefixArray = [0];
  const suffixArray = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    prefixArray.push(prefixArray[i] + nums[i]);
  }
  for (let i = 0; i < nums.length; i++) {
    suffixArray.push(sum - (prefixArray[i] + nums[i]));
  }

  for (let i = 0; i < nums.length; i++) {
    if (prefixArray[i] === suffixArray[i]) return i;
  }

  return -1;
};
