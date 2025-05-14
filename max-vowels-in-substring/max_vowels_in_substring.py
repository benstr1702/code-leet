class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowels = {"a", "e", "i", "o", "u"}
        # Edge Case: s.length === 1
        if len(s) == 1:
            if s[0] in vowels:
                return 1
            else:
                return 0
        left = 0
        right = k
