/**

Refactor the above stack implementation, using the concept of closure,
such that there is noway to access items array outside of createStack()

function createStack() {
    return {
        items,
        push(item) {
            this.items.push(item)
        },
        pop() {
            return this.item.pop()
        }
    }
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; // => [10]
stack.item = [10, 100, 1000] // Encapsulation broken!

* */

// SOLUTION

function createStack(){
    const items = [];
    return {
        push(item){
            items.push(item)
        },
        pop(){
            return items.pop()
        },
        getItems(){
            return items
        }
    }
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
console.log(stack.items); // => undefined
console.log(stack.getItems())