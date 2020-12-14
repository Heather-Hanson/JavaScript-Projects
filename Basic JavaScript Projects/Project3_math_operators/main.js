function math_object(){

//Get random number that is less than 100
var x = Math.random() * 100; 
document.getElementById("Math") .innerHTML = "Here's a random number: " + x;

//Round the random number above UP
var round = Math.ceil(x); 
document.getElementById("Math1") .innerHTML = "Let's round it up:  " + round;

//Perform math on rounded up random number
var y = round + (2*303)-3; 
document.getElementById("Math2") .innerHTML = "Lets take that number and add 2 x 303 and then subtract 3:  " + y;

//Increment the result of the math above up by 1
y++; 
document.getElementById("Math3") .innerHTML = "The result above incremented by 1 equals " + y;

//Divide the incremented number by 3 an display the remainder
var z = y % 3; 
document.getElementById("Math4") .innerHTML = "And if we take THAT result and divide it by 3, the remainder will be: " + z;

//Decrement the previous result by 1
var zz = --z;
document.getElementById("Math5") .innerHTML = "If I decrement the remainder we get:  " + zz;
}