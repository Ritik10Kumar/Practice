var maxProduct = function (nums) { // Maximum Product Subarray
    let num = nums.length
    let maxsofar = nums[0]
    let minsofar = nums[0]
    let globalMax = nums[0]

    for (let i = 1; i < nums.length; i++) {
        let current = nums[i]

        let maxtemp = Math.max(current, current * maxsofar, current * minsofar)
        let mintemp = Math.min(current, current * maxsofar, current * minsofar)

        maxsofar = maxtemp
        minsofar = mintemp

        globalMax = Math.max(globalMax, maxsofar)
    }

    return globalMax
};


var maxProfit = function (prices) {
    let maxprofit = 0
    let minprofit = Infinity
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minprofit) {
            minprofit = prices[i]
        } else {
            let profit = prices[i] - minprofit
            if (profit > maxprofit) {
                maxprofit = profit
            }
        }

    }

    return maxprofit
};


var chocolateDistibution = function (nums, m) {

    let arr = nums.sort((a, b) => a - b)
    let mindif = Infinity

    for (let i = 0; i < arr.length - m; i++) {
        const diff = arr[i + m - 1] - arr[i]
        mindif = Math.min(mindif, diff)
    }

    return mindif
}



/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
  const result = [];
  let inserted = false;

  for (const interval of intervals) {
    // Case 1: No overlap, current interval is before newInterval
    if (interval[1] < newInterval[0]) {
      result.push(interval);
    }
    // Case 2: No overlap, current interval is after newInterval
    else if (interval[0] > newInterval[1]) {
      if (!inserted) {
        result.push(newInterval);
        inserted = true;
      }
      result.push(interval);
    }
    // Case 3: Overlapping interval → merge
    else {
      newInterval[0] = Math.min(newInterval[0], interval[0]);
      newInterval[1] = Math.max(newInterval[1], interval[1]);
    }
  }

  // If newInterval was never added (last one), add now
  if (!inserted) result.push(newInterval);

  return result;
}
