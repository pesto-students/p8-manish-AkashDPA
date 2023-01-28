/**
 * Exercise 5.3
 * Write a function called hasDuplicate which accepts an array and returns true or false if that arraycontains a duplicate
 */

class customSet{
    constructor(arr = []){
        this.set = [];
        if(arr.length < 1){
            return this;
        }
        arr.forEach(ele => {
            this.push(ele);
        })
    }

    push(value){
        if(!this.set.includes(value)){
            this.set.push(value);
        }
    }
    size(){
        return this.set.length;
    }
}

let hasDuplicate = (arr) => {
    return new customSet(arr).size() !== arr.length;
};
  
let arr = [1, 2, 3, 4, 5];
console.log(hasDuplicate(arr));