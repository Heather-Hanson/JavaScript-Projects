function myDictionary(){
    //Establish my dictionary KVPs
    var Novel = {
        Title: "The Shining",
        Author: "Stephen King",
        Genre: "Horror",
        Published: 1977
    };
    //Delete "Genre"
    delete Novel.Genre;
    //Display in HTML
    document.getElementById("Dictionary") .innerHTML = Novel.Genre;
}