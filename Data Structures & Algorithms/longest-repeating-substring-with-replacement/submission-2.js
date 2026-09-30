class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let maxLen = 0;
        let maxFreg = 0;
        let map = new Map();

        for ( let right = 0; right < s.length; right++ )
        {
            map.set(s[right], (map.get(s[right]) || 0) + 1 );
            maxFreg = Math.max(maxFreg, map.get(s[right]));
        

        while ( ( right - left + 1 ) - maxFreg > k )
        {
            map.set(s[left], map.get(s[left]) - 1 );
            left++;
        }

        maxLen = Math.max( maxLen, right - left + 1 );
        }
        return maxLen
    }
}
