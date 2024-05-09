let random_num = Math.ceil(Math.random() * 6);
let user_num = document.getElementById("user_num");
let actual_num = document.getElementById("actual_num");
let result = document.getElementById("result");
let chances_dom = document.getElementById("chances");
let chances = 10;
let check_number = function check_num(num) {
  user_num.innerText = num;
  actual_num.innerText = random_num;
  if (num == random_num) {
    result.innerText = "Bullseye! You Win";
    random_num = Math.ceil(Math.random() * 6);
    chances--;
    chances_dom.innerText = "Chances:" + chances;
  } else {
    result.innerText = "Oops! You Loose";
    random_num = Math.ceil(Math.random() * 6);
    chances--;
    chances_dom.innerText = "Chances:" + chances;
  }

  if (chances <= 0) {
    check_number = function stop() {
      result.innerText = "Game Ended. You've Used All Chances";
      result.style.fontSize = "30px";
      chances_dom.innerText = "Chances:0";
      user_num.innerText = "-";
      actual_num.innerText = "-";
    };
  }
};
