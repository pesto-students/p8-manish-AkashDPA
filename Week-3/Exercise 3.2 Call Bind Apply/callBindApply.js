function greet(greeting, msg) {
    console.log(greeting + " " + this.name + ", " + msg);
}

let akashContext = {
    name: "Akash"
};

let masishContext = {
    name: "Manish"
};


// Using call
console.log("using call");
greet.call(akashContext, "Hello", "Welcome to Pesto"); // "ello Akash, Welcome to Pesto
greet.call(masishContext, "Hi", "Nice to meet you!"); // "Hi Manish, Nice to meet you!"


// Using bind
console.log("using bind");
let greetAkash = greet.bind(akashContext, "Bye", "See you soon");
greetAkash(); // "Bye Akash, See you soon"


// Using apply
console.log("using apply");
greet.apply(akashContext, ["Hello", "Welcome back!"]); // "HHello Akash, Welcome back!"
greet.apply(masishContext, ["Hi", "How are you?"]); // "Hi Manish, How are you?"
