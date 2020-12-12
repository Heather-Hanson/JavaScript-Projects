//* GLOBAL AND LOCAL VARIABLES
var x = 37.3; //* global variable
var y = 42.7; //*global variable

function round1(){
    document.write(Math.round(x) + "<br>"); //* arithmetic with global variable
}
function round2(){
    document.write(Math.round(y) + "<br>"); //*arithmetic with global variable
}
//*results will both execute because variables were global (accessible by all functions)
round1(); 
round2();


function addition(){
    var a = 3; //*local variable
    var b = 4; //*local variable
    document.write(a + b + "<br>"); //*arithmetic with local variable
}
function mulitply(){
    document.write(a * b + "<br>"); //*arithmetic with local variable
}
addition(); //*result will execute because local variable was contained in this function
mulitply(); //*result will NOT execute because it could not access local variable in other function

//*example to show how to debug in console
function subtract(){
    var c = 10;
    var d = 5;
    console.log(c - d + "<br>"); //*use console.logic to show error message in Google console
}
function divide(){
    console.log(c / d + "<br>");
}
subtract();
divide();

//* CONDITIONAL STATEMENTS

//*IF statement using Date() method
function conditional(){
    if(new Date() .getHours() > 17) {
        document.getElementById("greeting") .innerHTML = "Good Evening!" //*greeting will only display when it is greater than 5PM
    }
}

//*IF Statement example
function wishes(){
    var birthday = "Today"
    if(birthday == "Today"){
        document.getElementById("greeting") .innerHTML = "HAPPY BIRTHDAY!!" //*Variable for birthday was equal to "Today" so greeting will be displayed.
    }

}

//* IF/ELSE statement
function catFunction(){
    cats = document.getElementById("cats") .value;
    if(cats > 6){
        response = "You may have too many cats"; //* this response will display if user enters a number higher than 6
    }
    else{
        response = "You need more cats!"; //* if input number is not higher than 6, this response will be displayed
    }
    document.getElementById("moreCats") .innerHTML = response;
}

//* MULTIPLE IF/ELSE statements
function Time_function(){
    var Time = new Date() .getHours(); //* establish Time variable by getting the current time of "today"
    var Reply; 
    if(Time < 12 == Time > 0){
        Reply = "It is morning time!"; //* Reply will display if time is between 12AM and 12PM
    }
    else if(Time > 12 == Time < 18){
        Reply = "It is the afternoon."; //* Reply will display if time is between 12PM and 6PM
    }
    else{
        Reply = "It is evening time."; //* If two statements above are both false, this will be the default reply
    }
    document.getElementById("Time_of_day") .innerHTML = Reply;
}