/**
 * Exercise 4.3
 * 
 * Implement Fibonacci Series with Iterators
*/

const Fib = (n) => ({

    [Symbol.iterator]: () => {
        let i = 1;
        let thisNum = 0, nextNum = 0;
        return {
            next: () => {
                i++;
                if(i > n){
                    return { done: true }
                }
          [thisNum, nextNum] = [nextNum, (thisNum + nextNum) || 1];
                // [thisNum, nextNum] = [nextNum, (thisNum + nextNum) || 1];
                return { value: thisNum, done: false }
            }
        }
    }
})

console.log([...Fib(5)]);