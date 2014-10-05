$(document).ready(function() {
    partOne();
    partTwo();
    partThree();
    partFour();
} );

function partOne() {
    
}


function partTwo() {

}


function partThree() {

}


function partFour() {

}


function writeText(text) {
    for (var i = 0; i < text.length; i++) {
        // for every character, call writeChar with a small delay inbetween
        setTimeout(writeChar, 10 * i, text.charAt(i));
    }
}

function writeChar(ch) {
    // create a new element for the character. this is needed to make it fade in 
    // separate from the others.
    var charElement = document.createElement("span");
    var charID = makeid(); // unique, random ID
    charElement.className = "charElement" + charID;
    charElement.style.display = "none";
    charElement.innerText = ch;

    $("#text").append(charElement);
    $(".charElement" + charID).fadeIn(200);
}


// http://stackoverflow.com/a/1349426/805556
function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghipqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
