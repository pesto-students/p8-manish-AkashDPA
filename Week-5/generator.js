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
    let task1 = await doTask1(3000);
    console.log(task1);
    let task2 = await doTask2(1000);
    console.log(task2);
    let task3 = await doTask3(2000);
    console.log(task3);
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