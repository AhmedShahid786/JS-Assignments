//? Question 1
let first_name = prompt("Enter Your First Name");
let last_name = prompt("Enter Your Last Name");
let full_name = first_name + last_name;
let result = document.getElementById("prop");
result.innerText = "Greetings " + full_name;

//? Question 2
let input = prompt("Enter Your Favourite Mobile Phone Model");
let result_q2 = input + " Length of string " + input.length;
let display = document.write(result_q2);
console.log(result_q2);
