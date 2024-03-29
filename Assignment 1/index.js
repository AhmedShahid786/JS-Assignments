//Assignment 1:
alert("Welcome to My website");

//Assignment 2:
var favoriteFood = "Sushi";
console.log(favoriteFood);

//Assignment 3:
var num1 = 25;
var num2 = 5;

// Addition
var add = num1 + num2;
console.log("Addition:", add);

// Subtraction
var sub = num1 - num2;
console.log("Subtraction:", sub);

// Multiplication
var multiply = num1 * num2;
console.log("Multiplication:", multiply);

// Division
var divide = num1 / num2;
console.log("Division:", divide);

//Assignment 4:
/* Legal Variables:
        
        1. Food [Variable Names Can Consist Of Letters.]
        
        2. _snake_case [Variable Names Can Start With An Underscore Or Letter]
        
        3. MyVariable1 [Variable Names Can Consist Of Letters And Numbers]
        
        Illegal Variables:
        
        1. 2Var [Variable Name Can't Start With A Number.]
        
        2. Illegal Variable [A variable name can't contain any spaces.]
        
        3. alert [A variable name can't be any of JavaScript's keywords]
        */
//Assignment 5:
// BODMAS Based Calculations

// Defining variables
var a = 15;
var b = 10;
var c = 6;

/* Performing operations following BODMAS rule*/
var outcome = (a * b) / c + (a - b);
console.log("Result:", outcome);

//Assignment 6;Task 1:
/*Purpose:The Modulus Operator Calculates The Remainder Of A Division Operation So Is Its Purpose That It Is Used To Calculate The Remainder To A Division Operation.*/

/* Example of modulus operator usage*/
var value1 = 20;
var value2 = 5;
var remainder = value1 % value2;
console.log("Remainder:", remainder);
/*Output: 4 (because 20 divided by 5 leaves a remainder of 4)*/

//Assignment 6;Task 2:
var x = 10;
var postInc = x++;
console.log("Post-increment:", postInc);
// Output: 10 (original value of x)
console.log("After post-increment:", x);
/* Output: 11 (x is incremented after the post-increment operator.)*/

/* Re-assigning x for pre-increment operation.*/
x = 10;

/* Pre-increment: The value of x is incremented first, then used in the statement.*/
var preInc = ++x;
console.log("Pre-increment:", preInc);
/* Output: 11 (x is incremented before the statement.)*/
console.log("After pre-increment:", x);
/* Output: 11 (x is already incremented)*/

//Assignment 7;
var firstName = "Ahmed";
var lastName = "Shahid";

var fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

//Assignment 8:
var userAge = prompt("Please enter your age:");
console.log("Your Age:", userAge);

//Assignment 9:
var number = prompt("Please enter a number:");
if (number % 2 === 0) {
  console.log(number + " is even.");
} else {
  console.log(number + " is odd.");
}

//Assignment 10:
var numGrade = prompt("Please enter your numerical grade from 1-100.");
if (numGrade >= 90 && numGrade <= 100) {
  console.log("Your grade is A.");
} else if (numGrade >= 80 && numGrade < 90) {
  console.log("Your grade is B.");
} else if (numGrade >= 70 && numGrade < 80) {
  console.log("Your grade is C.");
} else if (numGrade >= 60 && numGrade < 70) {
  console.log("Your grade is D.");
} else if (numGrade >= 0 && numGrade < 60) {
  console.log("Your grade is F.");
} else {
  console.log("Wrong value. Please enter a number between 0 and 100.");
}
