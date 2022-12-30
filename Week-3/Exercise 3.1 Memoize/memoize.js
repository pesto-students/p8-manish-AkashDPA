// Create a memoize function that remembers previous inputs and stores them in cache 
// so that it won’t have to compute the same inputs more than once.
// The function will take an unspecifiednumber of integer inputs and a reducer method

//simple function to add numbers
function add(...args) {
    return args.reduce((num1, num2) => num1 + num2, 0);
}

//memoize wrapper
function memoize(fn){
    const cache = new Map();
    cache.keys(x => console.log)
    return function(...args){
        const key = args.join('+');
        if(cache.has(key)){
            return cache.get(key);
        }
        const calcSum = fn(...args);
        cache.set(key, calcSum);
        return calcSum;
    }
}

//initialize memoized function
const memoizeAdd = memoize(add);

//invoke
memoizeAdd(100,100);//returns 200
memoizeAdd(100);//returns 100
memoizeAdd(100,200)//returns 300
memoizeAdd(100,100)//returns 200 without computing
console.log(memoize.cache)