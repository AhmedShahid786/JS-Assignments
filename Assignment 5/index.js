//Task 1:
console.log("Task 1:");

var num1 = 5;
var num2 = 10;

//SUM
sum = num1 + num2;
console.log("Sum: " + sum);

//DIFFERENCE
dif = num2 - num1;
console.log("Difference: " + dif);

//PRODUCT
prod = num1 * num2;
console.log("Product: " + prod);

//Remainder
quot = num1 % num2;
console.log("Quotient: " + quot);

//Task 2:
console.log("Task 2: ");

var age = prompt("Enter Your Age:");
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

//Task 3:
console.log("Task 3: ");

var fruits = [];
var storage = ["apple", "banana", "orange", "grape", "kiwi"];
for (var i = 0; i <= 4; i++) {
  fruits.push(storage[i]);
}
console.log(fruits);

//Task 4:
console.log("Task 4: ");

for (var i = 0; i <= 4; i++) {
  console.log(fruits[i]);
}

//Task 5:
console.log("Task 5: ");

var star = "*";
var star2 = "*";
for (var r = 1; r <= 5; r++) {
  console.log(star);
  star = star + star2;
}

//Task 6:
console.log("Task 6: ");
var sum = 0;
for (var b = 1; b <= 10; b++) {
  sum = sum + b;
}
console.log("The Sum Of All Natural Numbers Is " + sum);

//Task 7:
console.log("Task 7: ");

var colors = [];
var palette = ["red", "green", "blue", "yellow", "orange"];
for (var i = 0; i <= 4; i++) {
  colors.push(palette[i]);
}
console.log(colors);

//Task 8:
console.log("Task 8: ");

for (var i = 0; i <= 4; i++) {
  console.log("Index:" + i + "|" + colors[i]);
}

//Task 9:
console.log("Task 9: ");

for (var i = 4; i >= 0; i--) {
  colors.splice(i, 1, palette[colors.length - 1 - i]);
}
console.log("Reversed Colors Array: " + colors);
