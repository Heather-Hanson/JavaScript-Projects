//*CONCAT METHOD
function concatFunction(){
    var first = "If at first "; //* Sentence has been broken up into different variables
    var success = "you don't succeed. ";
    var again = "Try and try again";
    var whole = first.concat(success, again); //*Use concate() to piece the first variable with the other two
    document.getElementById("sentence") .innerHTML = whole; //*Display result in HTML
}

//*SLICE METHOD
function sliceFunction(){
    var sentence = "I love cats"; //* Full senctence written as a string in a variable
    var section = sentence.slice(7,11); //* Slice method indicates which lines in code to display
    document.getElementById("word") .innerHTML = section; //* result in HTML
}

//*STRING METHOD
function String_Method(){
    var x = 30; //*variable is written as a number data type
    document.getElementById("number_to_string") .innerHTML = x.toString(); //* result using toString will be as a string data type
}

//*PRECISION METHOD
function Precision_Method(){
    var x = 35368.7659863226898; //*Number in variable that is very long
    document.getElementById("precision_number") .innerHTML = x.toPrecision(5); //*result will display only the first 5 digits of the number rounded up or down
}

