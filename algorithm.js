import { print_desc } from "./module.js";
import { print_ln } from "./module.js";

/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.
  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;
// 1 + 0 = 1

const num3 = 25;
const expected3 = 7;
// 2 + 5 = 7

const num4 = 258;
const expected4 = 6;
// 2 + 5 + 8 = 15 ; 1 + 5 = 6

// Bonus
const num5 = -25;
const expected5 = -7;
// 2 + 5 = -7 
// -2 + 5 = 3

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {
  // pseudo
  // parse into a string
  // base case: string is one char
  //              convert string to int
  //              return one digit int
  // recursive case: get first char then add it to sumToOneDigit(string.slice(1))

  var numString = num.toString();

  if (numString.length <= 1) {                                                        // Base Caase
    num = parseInt(numString,0)
    return num;
  }
  
  var firstNum = parseInt(numString[0],0);                                            // Recursive Case
  var sumString = sumToOneDigit(firstNum) + sumToOneDigit( numString.slice(1) );
  return  sumToOneDigit(sumString);
}

console.log("1243:", sumToOneDigit(1243));
console.log("num1:", sumToOneDigit(num1));
console.log("num2:", sumToOneDigit(num2));
console.log("num3:", sumToOneDigit(num3));
console.log("num4:", sumToOneDigit(num4));