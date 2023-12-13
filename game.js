
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var dice1 = document.querySelector(".container .dice .img1");
var dice2 = document.querySelector(".container .dice .img2");


dice1.setAttribute("src", "./images/dice" + randomNumber1.toString() + ".png");
dice2.setAttribute("src", "./images/dice" + randomNumber2.toString() + ".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").textContent = "Player 1 Wins!";
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").textContent = "Player 2 Wins!";
}

else {
    document.querySelector(".container h1").textContent = "Its a Draw!";
}