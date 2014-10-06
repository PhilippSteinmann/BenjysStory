var DELAY_BETWEEN_CHARS = 15;
var DELAY_BETWEEN_LINES_PER_CHAR = 40;

// returns an HTML element with the correct attributes used for buttons
function createButton(text, hidden) {
    var button = document.createElement("a");
    button.className = "button";
    button.innerText = text;
    button.style.tabIndex = 1;
    button.id = text;
    if (hidden)
        button.style.display = "none";

    return button;
}

// writes the lines in array `lines` with delay inbetween
function writeMultipleLines(lines, italics, delay_per_char) {
    // delay after each line depends on length.
    var delay_after_this_line;
    // so we can do the setTimeout properly.
    var time_since_end_of_last_line = 0;
    
    var delay_between_lines_per_char = typeof delay_per_char !== 'undefined' ? delay_per_char : DELAY_BETWEEN_LINES_PER_CHAR

    // iterate over lines and display them with proper delays
    lines.forEach(function(line, index) {

        delay_after_this_line = line.length * delay_between_lines_per_char;

        setTimeout(writeLine, time_since_end_of_last_line, line, italics);
        time_since_end_of_last_line += timeToWriteLine(line) + delay_after_this_line;
    } );
    return time_since_end_of_last_line;
}

//
// returns the miliseconds that chars will take to fade in
function writeLine(line, italics) {
    for (var i = 0; i < line.length; i++) {
        // for every character, call writeChar with a small delay inbetween
        setTimeout(writeChar, DELAY_BETWEEN_CHARS * i, line.charAt(i), italics);
    }
    setTimeout(writeChar, DELAY_BETWEEN_CHARS * line.length, "\n\n");

    return DELAY_BETWEEN_CHARS * (line.length + 1);
}

function timeToWriteLine(line) {
    return DELAY_BETWEEN_CHARS * (line.length + 1);
}

function writeChar(ch, italics) {
    // create a new element for the character. this is needed to make it fade in 
    // separate from the others.
    var charElement = document.createElement("span");
    var charID = makeid(); // unique, random ID
    charElement.className = "charElement" + charID;
    charElement.style.display = "none";
    if (italics)
        charElement.style.fontStyle = "italic";
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
