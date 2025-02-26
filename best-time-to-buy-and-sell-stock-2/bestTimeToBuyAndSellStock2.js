/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
	let profit = 0;
	for (let i = 1; i < prices.length; i++) {
		if (prices[i] > prices[i - 1]) {
			// Calculate profit
			profit += Math.abs(prices[i - 1] - prices[i]);
		}
	}
	return profit;
};
