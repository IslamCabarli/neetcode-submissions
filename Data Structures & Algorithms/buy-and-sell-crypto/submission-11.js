class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let buy = prices[0];

        for(let i=1; i < prices.length; i++) {
            const sell = prices[i];
            if(buy > sell) {
                buy = sell;
            } else {
                const profit = sell - buy;
                maxProfit = Math.max(maxProfit, profit)
            }
        }

        return maxProfit;
    }
}
