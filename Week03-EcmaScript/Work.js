const divider = "-----------------------------------------------------------";
const fibannaciNumbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
const primeNumbersArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
const person = {
    firsName: "Rasmus",
    lastName: "Lindved",
    address: "Lake Hills Blvd.",
    city: "Bellevue",
    state: "WA",
    zip: "98008"
};

class Calculator {

    add(operandA, operandB){
        return operandA + operandB;
    };

    substract(operandA, operandB){
        return operandA - operandB;
    }

    multiply(operandA, operandB){
        return operandA * operandB;
    }

    divide(operandA, operandB){
        if(operandB !== 0){
            return operandA / operandB;
        }
    }
}

const mathResult = ((addA, addB, multiply) => {
    'use strict';
    return (addA + addB) * multiply;
})(6, 4, 12);

console.log(mathResult);
console.log(divider);

((array) => {
    'use strict';
  array.forEach((data) => {
      console.log(data);
  })
})(fibannaciNumbers);

console.log(divider);

const primeNumbers = (numbers) => {
    'use strict';
    for (let number of numbers) {
        console.log(number);
    }
};

primeNumbers(primeNumbersArray);
console.log(divider);

const address = (person) => {
    for(let info in person){
        if(person.hasOwnProperty(info)){
            console.log("This persons " + info + " is: " + person[info]);
        }
    }
};

address(person);
console.log(divider);

const calculator = new Calculator();
console.log(calculator.add(2, 3));
console.log(calculator.substract(5, 2));
console.log(calculator.multiply(3, 5));
console.log(calculator.divide(15, 3));