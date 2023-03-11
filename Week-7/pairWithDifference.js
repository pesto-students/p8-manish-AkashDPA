/**
 * Problem 6.5: Pair With Given Difference
 * Given an one-dimensional unsorted array A containing N integers.
 * You are also given aninteger B, find if there exists a pair of elements in the array whose difference is B.
 * Return 1 if any such pair exists else return 0. 
 * 
 *  A = [5, 10, 3, 2, 50, 80] B = 78
 *  A = [-10, 20] B = 30
 */

 const pairWithDifference = (arr, B) => {
    for (const ele of arr) {
        let secondElement = Math.abs(B - Math.abs(ele));
        if(arr.includes(secondElement)){
            return 1;
        }
    }
    return 0;
}

console.log(pairWithDifference([5, 10, 3, 2, 50, 80], 78))