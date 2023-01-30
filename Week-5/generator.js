/**
 * 
 * Exercise 5.1:
 * Using Async/Await and Generators, create separate functions and achieve the samefunctionality.
 * Execute 3 callback functions asynchronously, for example doTask1(), doTask2() and doTask3()
 */

const doTask1 = (ms) => {
    return new Promise((resolve) => setTimeout(resolve("Task 1 Done"), ms));
};
  
const doTask2 = (ms) => {
    return new Promise((resolve) => setTimeout(resolve("Task 2 Done"), ms));
};
  
const doTask3 = (ms) => {
    return new Promise((resolve) => setTimeout(resolve("Task 3 Done"), ms));
};

const usingAsync = async () => {
    Promise.all([doTask1(3000), doTask2(1000), doTask3(2000)]).then((response) => console.log(response));
};
  
function * usingGenerator() {
    yield doTask1(3000);
    yield doTask2(1000);
    yield doTask3(2000);
}
  
let gen = usingGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

usingAsync();