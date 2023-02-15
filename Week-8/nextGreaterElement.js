/**
 * Problem 7.5: Next Greater ELement
 * Given an array arr{} of size N having distinct elements, 
 * the task is to find the nextgreater element for each element of the array in order of their appearance in the array.
 * Next greater element of an element in the array is the nearest element on the rightwhich is greater than the current element.
 * If there does not exist next greater of currentelement, then next greater element for current element is -1.
 * For example, next greater of the last element is always -1
 */

function nextGreaterElement(arr){
    const stack=[];
    for(let i = arr.length-1; i >=0; i--){
        while(stack.length > 0 && stack[stack.length-1] <= arr[i]){
            stack.pop();
        }
        const currentEle = arr[i];
        arr[i] = stack[stack.length-1] ?? -1;
        stack.push(currentEle);
    }
    return arr;
}

const arr = [1, 3, 2, 4]

console.log(nextGreaterElement(arr))