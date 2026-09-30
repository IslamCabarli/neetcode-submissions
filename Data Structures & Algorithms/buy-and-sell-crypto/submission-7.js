class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      let first = 0;
      let last = 1;
      let profit = 0;
      let maxprofit = 0;
      while ( last < prices.length ) 
      {
        if ( prices[first] < prices[last] ) 
        {
          profit = prices[last] - prices[first]
          if ( profit > maxprofit ) 
          {
            maxprofit = profit;
          }
        }
        else { 
          first = last;
        }
        last++;
      }
      return maxprofit
    }
}