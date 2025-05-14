class Solution:
    def largestAltitude(self, gain: list[int]) -> int:
        max_altitude: int = 0
        altitudes: list[int] = [0]

        for gain_value in gain:
            altitudes.append(altitudes[-1] + gain_value)

        for num in altitudes:
            max_altitude = max(max_altitude, num)

        return max_altitude


result = Solution().largestAltitude([-5, 1, 5, 0, -7])
print(result)
