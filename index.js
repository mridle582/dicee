//  Calculates player one's roll and updates player one's dice image.
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var image1 = document.querySelector(".container .img1");
image1.setAttribute("src", "images/dice" + randomNumber1.toString() + ".png");


//  Calculates player two's roll and updates player two's dice image.
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var image2 = document.querySelector(".container .img2");
image2.setAttribute("src", "images/dice" + randomNumber2.toString() + ".png");


// Compares the player one's and player two's role and update the page title with the winner
if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins!🚩"
} else {
    document.querySelector(".container h1").innerHTML = "Draw!"
}