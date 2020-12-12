//* TERNARY OPERATION
function voteFunction(){
    var Age, Can_Vote; //*establish variables
    Age = document.getElementById("Age").value; //*get input value
    Can_Vote = (Age < 18) ? "You are too young ":"You are old enough "; //*compare input to age 18
    document.getElementById("Vote").innerHTML = Can_Vote + "to vote!"; //*display results based on whether the item above was true or false
}

//* KEYWORDS FUNCTION
function Family(relationship, age, siblings, parents){ //* Establish FAMILY class parameters
    this.Family_relationship = relationship;
    this.Family_age = age;
    this.Family_siblings = siblings;
    this.Family_parents = parents;
}
//* create new instances of object Family
var Lindsay = new Family("cousin", 38, 1, "Monica & Terry");
var Angela = new Family("cousin", 42, 0, "Frank & Rose");
var Tena = new Family("aunt", 75, 12, "Stephen & Mary")

//* Function to display a member of my family when called in HTML
function myFamily(){
    document.getElementById("familyMembers") .innerHTML = 
    "Lindsay is my " + Lindsay.Family_relationship + " and she is " + Lindsay.Family_age + " years old. She has " + Lindsay.Family_siblings + "sibling(s) and her parents are " + Lindsay.Family_parents;
}

//*NESTED FUNCTION
function employeeFunction(){
    document.getElementById("Nested_Function") .innerHTML = yearsEmployed();
    function yearsEmployed(){
        var YearHired = 2017;
        var CurrentYear = 2020;
        function subtraction(){totalYears = CurrentYear - YearHired;}
        subtraction();
        return "This employeed has been working here for " + totalYears + " years";

    }
}