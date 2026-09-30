class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for (let i = 0; i <= nums.length; i++){
            const point = target - nums[i];
        if(map.has( point )){
            return [map.get(point), i]
        } 
        map.set( nums[ i ], i );
        }
    }

}
