class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums.sort((a,b) => (a-b));
        nums = [...new Set(nums)];
        if (nums.length === 0) return 0;
        let longest = 0;
        let current = 1;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] - nums[i-1] === 1) {
                current++;
            } else {
                longest = Math.max(longest, current);
                current = 1;
            }
        }
        longest = Math.max(longest, current);
        return longest;

    }
}
