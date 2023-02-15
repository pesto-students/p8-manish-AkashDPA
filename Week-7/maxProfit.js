/**
 * Problem 6.4 : 
 * Best time to buy and sell stock
 * ou are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit youcan achieve from this transaction. If you cannot achieve any profit, return 0
 */


const maxProfit = function (prices) {
    let maxprofit = 0;
    let left = 0;
    let right = 1;
  
    while (right < prices.length) {
      let dayProfit = prices[right] - prices[left];
  
      if (dayProfit < 0) {
        left = right;
      }
  
      if (dayProfit > maxprofit) {
        maxprofit = dayProfit;
      }
  
      right++;
    }
  
    return maxprofit;
};
  
  console.log(maxProfit([1, 2, 5, 3, 6, 4]));