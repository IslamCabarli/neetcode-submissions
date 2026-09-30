class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}
        for (  let str of strs){
            let point = str.split('').sort().join('')

            if ( !map[point]) map[point] = [];

            map[point].push(str);
        }

        return Object.values(map)
    }
}
