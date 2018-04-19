// Immediately invoked function using ES5 syntax.
(function() {
    console.log("Immediately invoke with ES5");
})();

// Immediately invoked function using ES6 syntax.
(() => {
    console.log("Immediately invocation ES6");
})();

// ----------------------------------------------

((array) => {
    array.forEach((data) => {
        console.log(data);
    });
})(["One", "Two", "Three"]);

// ----------------------------------------------

const logger = (array) => {
    array.forEach((data, i) => {
        console.log(data, i);
    });
};

const numbers = ["One", "Two", "Three"];
logger(numbers);

// ----------------------------------------------

function addEs5(a, b) {
    return a + b;
};

const addEs6 = (a, b) => {
    return a + b;
};

const addConcise = (a, b) => a +b;

console.log(addEs5(4, 4));
console.log(addEs6(10, 10));
console.log(addConcise(10, 20));

// ----------------------------------------------

const loggerForOf = array => {
    for (let data of array) {
        console.log(data);
    }
};
loggerForOf(numbers);

const myObject = {first: "alpha", last: "omega" };

const loggerForIn = (object) => {
    for (let property in object){
        if(object.hasOwnProperty(property)){
            console.log(object[property]);
        }
    }
};

loggerForIn(myObject);

// ----------------------------------------------

class Person {

    constructor(first, last){
        this.first = first;
        this.last = last;
    }

    fullName() {
        return this.first + " " + this.last;
    }

    // Doesn't work in ES6, but will in the future.
    // Works in React. Use this syntax there.
    // getLast = () => this.last;
}

const person = new Person("Some", "Name");
console.log(person.fullName());

// ----------------------------------------------