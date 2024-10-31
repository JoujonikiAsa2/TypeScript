"use strict";
// function
function getSum(num1, num2) {
    return num1 + num2;
}
const output = getSum(10, 20);
console.log(output);
const getSumArrow = (num1, num2) => num1 + num2;
// Object ---> Function ---> method
const poorUser = {
    name: "Joujoniki Asa Roy",
    age: 21,
    balance: 0,
    // method
    addBalance(balance) {
        console.log(balance);
        return `Total balance: ${this.balance} + ${balance} = ${this.balance + balance}`; //this.balance + balance;
    }
};
