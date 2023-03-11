
/**
 *  Exercise 4.1
 *  Implement a function namedgetNumberwhich generatesa random number.
 *  If randomNumberis divisible by 5 it will reject the promise else it will resolve the promise.
 *  Let’s also keep thepromise resolution/rejection time as a variable. 
 * 
*/ 
 
//custom Promise class
class CustomPromise {
    constructor(executor) {
        this.successCallbacks = [];
        this.errorCallbacks = [];
        this.finallyCallbacks = [];

        executor((status, data) => {
            if (status) {
                this.successCallbacks.forEach(fn => fn(data));
            } else {
                this.errorCallbacks.forEach(fn => fn(data));
            }
            this.finallyCallbacks.forEach(cb => cb());
        });
    }

    then(successCb) {
        this.successCallbacks.push(successCb);
        return this;
    }

    catch(errorCb) {
        this.errorCallbacks.push(errorCb);
        return this;
    }

    finally(finallyCb) {
        this.finallyCallbacks.push(finallyCb);
        return this;
    }
}


function getNumber(executor, delay){
    let num = Math.floor(Math.random() * 100);
    setTimeout(() => {
        if(num%5 == 0){
            return executor(false, `Rejected for number ${num}`);
        }
        return executor(false, `Resolved for number ${num}`);
    }, delay);
}

const promise = new CustomPromise((executor) => getNumber(executor, 1000));

promise
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log(`Promise is completed`);
});


//SAMPLE OUTPUT
// Promise is resolved for number 4
// Promise is completed
// Promise is rejected for number 10
// Promise is completed