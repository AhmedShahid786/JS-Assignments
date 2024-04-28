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
