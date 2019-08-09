//Die 1 
var randomNum = Math.floor(Math.random() * 6 + 1);
var randomImg = "dice" + randomNum +".png"; 
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImg);
//Die 2 
var randomNum2 = Math.floor(Math.random() * 6 + 1); 
var randomImg2 = "dice" + randomNum2 + ".png";
var image2 = document.querySelectorAll("img")[1]; 
image2.setAttribute("src", randomImg2); 
//Who Wins 
var header = document.querySelector("h1"); 
if(randomNum > randomNum2){
  header.innerHTML = "⚑ Player 1 Wins! ⚑"; 
}
else if(randomNum < randomNum2){
  header.innerHTML = "⚑ Player 2 Wins! ⚑";
}
else{
  header.innerHTML = "It's a tie!"; 
}

