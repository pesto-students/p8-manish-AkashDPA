/**
 * Problem 6.3
 * Sort array of 0's,1's and 2's
 */

let arr = [0, 2, 1, 2, 0];

//create frequency map
let frequencyMap = new Map();
arr.forEach(ele => {
    if(frequencyMap.has(ele)){
        frequencyMap.set(ele, frequencyMap.get(ele) + 1);
        return;
    }
    frequencyMap.set(ele, 1);
})

//build sorted array
arr = [];
let zeroCount = frequencyMap.get(0);
while(zeroCount-- > 0){
    arr.push(0);
}
let oneCount = frequencyMap.get(1);
while(oneCount-- > 0){
    arr.push(1);
}
let twoCount = frequencyMap.get(2);
while(twoCount-- > 0){
    arr.push(2);
}

console.log('sorted array', arr);