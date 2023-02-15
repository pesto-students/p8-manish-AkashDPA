/**
 * Problem 6.1: Max Sum Contiguous Subarray
 * 
 * Find the contiguous subarray within an array, A of length N which has the largest sum.
 * Input Format:The first and the only argument contains an integer array, A.
 * Output Format: Return an integer representing the maximum possible sum of the contiguous subarray.
 * Constraints: 1 <= N <= 1e6 -1000 <= A[i] <= 1000
 * 
 * Input 1: A = [1, 2, 3, 4, -10]
 * Output 1: 10
 * Explanation 1: The subarray [1, 2, 3, 4] has the maximum possible sum of 1
 * 
 * Input 2: A = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 * Output 2: 6
 * Explanation 2: The subarray [4,-1,2,1] has the maximum possible sum of 6
 * 
 * [99, 100, -1, -2, -4, -5]
 * kadane algo  
 */

 let A = [99, 100, -1, -2, -4, -5]

 let maxSum = maxSubArraySum(A);
 console.log(maxSum);
 
 function maxSubArraySum(a)
 {
    let overall_max = -Number.MAX_VALUE;
    let current_max = 0
    
    for (var i = 0; i < a.length; i++)
    {
        current_max = current_max + a[i]
        if (overall_max < current_max)
            overall_max = current_max

        if (current_max < 0)
            current_max = 0
    }
    return overall_max
 }