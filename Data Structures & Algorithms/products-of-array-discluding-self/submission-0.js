class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let arr = [];
        
        for ( let i = 0; i < nums.length; i++ ){
            let point = 1;
            for ( let j = 0; j < nums.length; j++ ){
                if ( j === i ) continue;
                point *= nums[j];
            


        }
            arr.push(point);
        }
        return arr;

    }
}
