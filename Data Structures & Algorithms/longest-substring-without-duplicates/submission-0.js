class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
   lengthOfLongestSubstring(s) {
    let set = new Set();
    let maxLen = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        while (set.has(s[end])) {
            set.delete(s[start]);
            start++;
        }
        set.add(s[end]);
        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
}

}
