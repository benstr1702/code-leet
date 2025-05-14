class Solution:
    def findMaxAverage(self, nums: list[int], k: int) -> float:
        left = 0
        right = left + k
        n = len(nums)
        sum = 0
        # Edge Case: If only one element in the list , return the element in float form
        if n == 1:
            return float(nums[0])
        # First avg
        for i in range(k):  # stops at index 3
            sum += nums[i]
        print(f"sum, {sum}")
        max_avg = sum / k
        while right < n:
            print(f"left: {left} right: {right} sum: {sum}")
            sum = sum - nums[left] + nums[right]
            max_avg = max(max_avg, sum / k)
            left += 1
            right += 1
        return max_avg


if __name__ == "__main__":
    print(Solution().findMaxAverage([1, 12, -5, -6, 50, 3], 4))
