function createButton(text, hidden) {
    var button = document.createElement("a");
    button.className = "button";
    button.innerText = text;
    button.id = text;
    if (hidden)
        button.style.display = "none";

    return button;
}
//
// returns the miliseconds that chars will take to fade in
function writeLine(text) {
    for (var i = 0; i < text.length; i++) {
        // for every character, call writeChar with a small delay inbetween
        setTimeout(writeChar, DELAY_BETWEEN_CHARS * i, text.charAt(i));
    }
    setTimeout(writeChar, DELAY_BETWEEN_CHARS * text.length, "\n\n");
    return DELAY_BETWEEN_CHARS * (text.length + 1);
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
//
// http://stackoverflow.com/a/1349426/805556
function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghipqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
