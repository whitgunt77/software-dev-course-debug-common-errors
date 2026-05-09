/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

// ORIGINAL (broken):
// console.log("Welcome to the bootcamp

// What’s Wrong?
// The string is never closed. Then opening double quote has no matching
// closing quote, and the closing parenthesis and semicolon are missing.
// JavaScript sees an unterminated string literal and throws a SyntaxError
// before the program can run at all.

// FIXED:
console.log("Welcome to the bootcamp");


// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

// ORIGINAL (broken):
// let numbers = [2, 4, "eight"];
// for (let i = 0; i < numbers.length; i++) {
//   let doubled = numbers[i] * 2;
//   console.log(doubled);
// }

// What’s Wrong?
// The array contains the string "eight" instead of the number 8.
// When JavaScript tries to multiply "eight" * 2, it cannot perform
// arithmetic on a non-numeric string and returns NaN instead of a number.
// The program doesn't crash with an exception, but it produces an
// incorrect result (NaN) for the third element — this is a runtime issue
// because the data type is wrong at the point of execution.

// FIXED:
let numbers = [2, 4, 8]; // Changed "eight" to 8
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}
// Output: 4, 8, 16


// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

// ORIGINAL (broken):
// function isPrime(num) {
//   if (num < 2) return false;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return true;  // Supposed to indicate num is NOT prime
//     }
//   }
//   return false; // Supposed to indicate num IS prime
// }

// console.log(isPrime(7)); // Expected true but gets false

// What’s Wrong?
// The return values inside the function are swapped.
// When a divisor is found (meaning the number IS divisible by something
// other than 1 and itself), the function returns true — but it should
// return false because that means the number is NOT prime.
// At the end, when no divisor is found (meaning the number IS prime),
// the function returns false — but it should return true.
// This is a logic error because the syntax is valid and the program runs
// without crashing, but it produces the opposite of the correct answer.

// FIXED:
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // A divisor was found — num is NOT prime
    }
  }
  return true; // No divisor found — num IS prime
}

console.log(isPrime(7));   // Output: true (7 is prime)
console.log(isPrime(4));   // Output: false (4 is divisible by 2)
console.log(isPrime(13));  // Output: true (13 is prime)
console.log(isPrime(1));   // Output: false (1 is not prime)