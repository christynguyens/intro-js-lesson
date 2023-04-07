/*
========== LESSON 1 - VARIABLES ==========
Complete the following numbered tasks:
*/

// 1. Declare 2 variables below:
    let person;
    let bankAccount;
    let rich;

// Initialize 3 variables:

    // 2. Assign one to the type Number below:
        bankAccount = 123456789;
        bills = 66666;

    // 3. Assign one to the type Boolean below:
        rich = true;

    // 4. Assign one to the type String below:
        person = "Quincy Pham";

console.log("This is the bankaccount console log: " + bankAccount);
console.log(bankAccount - bills);
console.log(rich);
console.log(person);

console.log(person + " is rich, this is " + rich + " because they have this much $" + bankAccount )


let student = "christy";
console.log(student);
student = ava;
console.log(student);

/*
========== LESSON 2 - FUNCTIONS ==========
*/
// 1. Create a doubleNumber function that takes in 1 number parameter and returns double the value.

function doubleNumber(num) {
    return num+num;
}
console.log(num+num);

// 2. Create a squareNumber function that takes in 1 number parameter and returns the square
function squareNumber(num) {
    return num*num;
}
console.log(num*num);

// 3. Create a productNumber function that takes in 2 number parameters and returns the product of the 2 numbers
const productNumber = (num1, num2) => 
{
    return num1 * num2; 
}

console.log(productNumber(num1, num2));


/*
========== LESSON 3 - NUMBERS ==========
*/

// 1. Create a sumOfThree function statement that takes in 3 number parameter and returns sum.
function sumOfThree(num1, num2, num3) {
    return num1 + num2 + num3;
  }

// 2. Create a productofThree function expression that takes in 3 number parameter and returns the quotient.
const productOfThree = function(num1, num2, num3) {
    return num1 / num2 / num3;
  }

// 3. Create a getRemainder arrow function that takes in 2 number parameters and returns the remainder of the first number divided by the second number
const getRemainder = (num1, num2) => num1 % num2;

// 4. Create a getRootRounded function that takes in 1 number, and returns the absolute value's square root, rounded up. Note: negative numbers should have their absolute value taken to still work.
function getRootRounded(num) {
    return Math.ceil(Math.sqrt(Math.abs(num)));
  }

// 5. Create a getRandom function that returns a random number from 1-100.
function getRandom() {
  return Math.random() * (100-1) + 1;
}

