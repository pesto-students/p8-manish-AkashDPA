/**
 * Problem 6.6 :
 * 3 sumGiven an array S of n integers, find three integers in S such that the sum is closest to agiven number, target.
 * Return the sum of the three integers.
 * Assume that there will only beone solution
 * Example: given array S = {-1 2 1 -4}, and target = 1.
 * The sum that is closest to thetarget is 2. (-1 + 2 + 1 = 2)
 */

console.log(nearestSum([-1, 2, 1, -4], 1))

function nearestSum(nums, target ){
    nums.sort((a,b) => a - b);
    let result = nums[0] + nums[1] + nums[2];
  
    for(let i = 0; i < nums.length - 2; i++){
      let j = i + 1;
      let k = nums.length - 1;
      while( j < k ){
        const currSum = nums[i] + nums[j] + nums[k];
        if(Math.abs(currSum - target) <  Math.abs(result - target)){
          result = currSum;
        }
        if(currSum == target) return currSum;
        else if(currSum > target) k--;
        else j++;
      }
    return result;
    }
  }