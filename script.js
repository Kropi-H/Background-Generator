var _ = require('lodash');

let array = [1,2,3,4,5,6,7,8,9];
console.log('answer:', _.without(array, 3)); 

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var angleNum = document.getElementById("number");
var randomValue = document.getElementById("randomColorButton");

window.onload = setRandomValue;

function setGradient() {
	body.style.background = 
	"linear-gradient("+angleNum.value+"deg, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ") no-repeat fixed";

	css.textContent = body.style.background;
}

function setRandomValue(){
	var randomNum1 = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
	var randomNum2 = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
	var randomAngle = Math.floor((Math.random()*360)*1)

	var style = body.style.background = 
	"linear-gradient("+randomAngle+"deg, " 
	+ randomNum1
	+ ", " 
	+ randomNum2 
	+ ") no-repeat fixed";
	
	css.textContent = style.slice(0, 41);
	angleNum.value = randomAngle;
}

angleNum.addEventListener("input", setGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomValue.addEventListener("click", setRandomValue);