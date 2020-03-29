
function diceRoll() {
    var p1Name = document.getElementsByName("p1")[0].value;
    var p2Name = document.getElementsByName("p2")[0].value;

    var randomNum1 = Math.floor(Math.random() * 6) + 1;
    var randomNum2 = Math.floor(Math.random() * 6) + 1;

    var randomDice1 = "images/dice" + randomNum1 + ".png";
    var randomDice2 = "images/dice" + randomNum2 + ".png";

    document.querySelectorAll("img")[0].setAttribute("src", randomDice1);
    document.querySelectorAll("img")[1].setAttribute("src", randomDice2);


    if (randomNum1 > randomNum2) {
      document.querySelector("h1").innerHTML = "🏆" + p1Name + " Wins!!";
    }
    else if (randomNum1 < randomNum2) {
      document.querySelector("h1").innerHTML = p2Name + " Wins!! 🏆";
    }
    else {
      document.querySelector("h1").innerHTML = "⚔️ Draw! ⚔️";
    }

}
