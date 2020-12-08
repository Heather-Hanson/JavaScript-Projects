function myFunction() {
    var Today = "The day is TODAY!"; //add value to my variable
        Today+="The hour is NOW!"; //concatenate with my existing variable
    var Today = Today.fontcolor("red"); //color font of variable red

    document.getElementById("test").innerHTML = Today; //run variable for element with id="test"
  }