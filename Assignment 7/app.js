// //? Question 1
// let first_name = prompt("Enter Your First Name");
// let last_name = prompt("Enter Your Last Name");
// let full_name = first_name + last_name;
// let result = document.getElementById("prop");
// result.innerText = "Greetings " + full_name;

// //? Question 2
// let input = prompt("Enter Your Favourite Mobile Phone Model");
// let result_q2 = input + " Length of string " + input.length;
// let display = document.write(result_q2);
// console.log(result_q2);

let random_num = Math.ceil(Math.random() * 6);
let user_num = document.getElementById("user_num");
let actual_num = document.getElementById("actual_num");
let result = document.getElementById("result");

function check_num(num) {
  user_num.innerText = num;
  actual_num.innerText = random_num;
  if (num == random_num) {
    result.innerText = "Bullseye! You Win";
    random_num = Math.ceil(Math.random() * 6);
  } else {
    result.innerText = "Oops! You Loose";
    random_num = Math.ceil(Math.random() * 6);
  }
}
