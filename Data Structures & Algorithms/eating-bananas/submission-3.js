class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
       let min = 1;
       let max = Math.max(...piles);
       let res = max;
       while( min <= max ) {
        const k = Math.floor((min+max) / 2);
       
        let time = 0;

        for (let pile of piles){
            time += Math.ceil(  pile / k);
        }
        if ( time <= h ){
            res = k;
            max = k - 1;
        } else {
            min = k + 1;
        }
    }
    return res;
    }
}
