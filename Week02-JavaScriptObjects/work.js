#!/usr/bin/env node

const person = {
    firstName: "Rasmus",
    lastName: "Lindved",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

const calculator = {
    operand01: -1,
    operand02: -1,
    add: function(){
        return this.operand01 + this.operand02;
    },
    subtract: function(){
        return this.operand01 - this.operand02;
    }
}

calculator.multiply = function(){
    return this.operand01 * this.operand02;
}

calculator.operand01 = person.firstName.length;
calculator.operand02 = person.lastName.length;

function divider(title){
    console.log("=====================================");
    console.log(title);
    console.log("=====================================");
}

divider("Person");
console.log("Firstname: " + person.firstName);
console.log("Lastname: " + person.lastName);
console.log("Fullname: " + person.fullName());

divider("Calculator")

console.log("operand01 = " + calculator.operand01);
console.log("operand02 = " + calculator.operand02);
console.log("Add: " + calculator.add());
console.log("Substract: " + calculator.subtract());
console.log("Multiply: " + calculator.multiply());





