//* WHILE LOOP
function whileLoop(){
    var holidays = ["Christmas", "New Years Day", "Thanksgiving"];
    var x = 0;
    var text = "";

    while (holidays[x]) {
    text += holidays[x] + "<br>";
    x++;
    }   
document.getElementById("holidays") .innerHTML = text;
}

//*FOR LOOP
var Instruments = ["Guitar", "Piano", "Trumpet", "Flute"];
var Content = "";
var Y;
function For_Loop(){
    for(Y = 0; Y < Instruments.length; Y++){
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments") .innerHTML = Content;
}

//*ARRAY FUNCTION
function array_Function(){
    var Instruments = [];
    Instruments[0] = "Guitar";
    Instruments[1] = "Piano";
    Instruments[2] = "Trumpet";
    Instruments[3] = "Flute";
    document.getElementById("Array") .innerHTML = "This instrument is a " + Instruments[2];

}

//*OBJECT DEFINED USING "LET"
let cat = {
    name: "Phoebe",
    color: "black",
    age: "5 months",
    description: function(){
        return "My cat's name is " + this.name + ". Her color is " + this.color + " and she is " + this.age + " old.";
    }
};
document.getElementById("myCat") .innerHTML = cat.description();


