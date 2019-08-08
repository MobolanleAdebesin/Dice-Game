//Die 1 
var randomNum = Math.floor(Math.random() * 6 + 1);
var randomImg = "dice" + randomNum +".png"; 
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImg);

