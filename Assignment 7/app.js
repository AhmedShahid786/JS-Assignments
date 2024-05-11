let random_num = Math.ceil(Math.random() * 6);
let user_num = document.getElementById("user_num");
let actual_num = document.getElementById("actual_num");
let result = document.getElementById("result");
let total_wins = document.getElementById("wins");
let total_losses = document.getElementById("losses");
let chances_dom = document.getElementById("chances");
let chances = 10;
let wins = 0;
let losses = 0;
let check_number = function check_num(num) {
  user_num.innerText = num;
  actual_num.innerText = random_num;
  if (num == random_num) {
    result.innerText = "Bullseye! You Win";
    random_num = Math.ceil(Math.random() * 6);
    chances--;
    wins++;
    chances_dom.innerText = "Chances:" + chances;
  } else {
    result.innerText = "Oops! You Loose";
    random_num = Math.ceil(Math.random() * 6);
    chances--;
    losses++;
    chances_dom.innerText = "Chances:" + chances;
  }

  if (chances <= 0) {
    check_number = function stop() {
      total_wins.innerText = "Total Wins:";
      user_num.innerText = wins;

      total_losses.innerText = "Total Losses:";
      actual_num.innerText = losses;

      result.style.fontSize = "30px";
      result.innerText = "Game Ended. You've Used All Chances";
      chances_dom.innerText = "Chances:0";
    };
  }
};
