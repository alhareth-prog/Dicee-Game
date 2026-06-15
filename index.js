var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomNumber1+".png";
var randomImageSorce="images/"+randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSorce);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSorce2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSorce2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player1 wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player2 wins!";
}
else{
    document.querySelector("h1").innerHTML="DRAW!";
}