function myFunctions(){

//Example of typeof operator
document.getElementById("typeof") .innerHTML = (typeof "Happy Holidays!");

//Combine string with number
document.getElementById("combination") .innerHTML = ("My age is 3" + 8);

//Use operators
document.getElementById("and") .innerHTML = (5 > 6 && 6 < 10);
document.getElementById("or") .innerHTML = (5 > 6 || 6 < 10);
document.getElementById("equal") .innerHTML = (20 == 20);
document.getElementById("equal_comparison") .innerHTML = (20 === "20");
document.getElementById("not") .innerHTML = !(20 == 20);

}