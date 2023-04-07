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
// student = ava;
console.log(student);

/*
========== LESSON 2 - FUNCTIONS ==========
*/
// 1. Create a doubleNumber function that takes in 1 number parameter and returns double the value.

function doubleNumber(num) {
    console.log(num+num);
    return num+num;
}

doubleNumber(5);

// 2. Create a squareNumber function that takes in 1 number parameter and returns the square
function squareNumber(num) {
    console.log(num*num);
    return num*num;
}
squareNumber(5);

// 3. Create a productNumber function that takes in 2 number parameters and returns the product of the 2 numbers
const productNumber = (num1, num2) => 
{
    console.log(num1, num2);
    return num1 * num2; 
}

productNumber(2, 5);

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

/*
========== LESSON 4 - STRINGS ==========
*/
// 1. Create a getPersonStats function statement that takes in 3 Strings: name, job, age. The function should console log a statement such as "Hi my name is [NAME], I am [AGE] years old, and I am a [JOB]".
function getPersonStats(name, job, age) {
    console.log("Hi my name is " + name + ", I am " + age + " years old, and I am a " + job);
}

getPersonStats("bryan", "doctor", 3);

// 2. Create a sayFirstAndLast function expression that takes in 1 String parameter and console logs "the first character is: [firstChar] and last character is: [lastChar]".
const sayFirstAndLast = function(str) {
    var stri = str
    console.log("the first character is: " + stri[0] + " and last character is: " + stri[stri.length -1]);
}
sayFirstAndLast("hello");

// 3. Create a yellFruitNum arrow function that takes in 1 number parameter, 1 String that is a fruit parameter, and console logs the sentence "I have [number] [FRUIT]" in all caps.
const yellFruitNum = (num, str) => console.log("I have " + num + " " + str.toUpperCase())
yellFruitNum(5, "banana");
// 4. Create a sliceFruit function that takes in a String of a fruit and console logs everything except the first 2 letters.
function sliceFruit(str) {
    console.log(str.substring(2));
}
sliceFruit("mango");
// 5. Create a splitFruit function that takes in a String of a fruit and returns an array of the letters split into each index of the array.
function splitFruit(str) {
    return str.spliit(" ");
}
