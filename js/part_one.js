function partOne() 
{
    // each part is broken up into sections. this is a technical necessity. one section runs, then there's a delay, then the next one. this section structure is needed to use the delays.
    var delay = 500;
    var moveOnAutomatically = true;
    if (currentSection == 1)
        delay = 2000 + writeLine("The grass was cold. It smelled cold, like when it rained.");

    else if (currentSection == 2) delay = 1000 + writeLine("I could feel my eyes. I looked at the grass but I still felt my eyes.");

    else if (currentSection == 3) {
        var eyesButton = createButton("Eyes", true);
        $("#buttons").append(eyesButton); 
        $("#Eyes").click(function() {
            partOne();
        } );


        moveOnAutomatically = false;
        fallAsleepPartOne(6000);
    }

    else if (currentSection == 4) { 
        resetPartOne();
        delay = 1000 + writeLine("The grass kept going away. I tried to look but it kept going away.");
    }

    else if (currentSection == 5) {
        moveOnAutomatically = false;
        fallAsleepPartOne();
    }

    else if (currentSection == 6) {
        resetPartOne();
        delay = 1000 + writeLine("In the barn they were talking.");
    }

    else if (currentSection == 7) {
        moveOnAutomatically = false;
        fallAsleepPartOne();
    }

    else if (currentSection == 8) {
        resetPartOne();
        delay = 1000 + writeLine("The sun was on the grass but it wasn't warm. The sun was there but it wasn't.");
    }

    else if (currentSection == 9) {
        moveOnAutomatically = false;
        fallAsleepPartOne(1000);
    }


    //writeLine("");
    currentSection++;
    if (moveOnAutomatically)
        setTimeout(partOne, delay);
}

function resetPartOne() {
        $("#text").text("");
        $("#Eyes").hide();
        $("#text").stop();
        $("#text").css({opacity: 1});
}

function fallAsleepPartOne(fall_asleep_rate) {
    fall_asleep_rate = typeof fall_asleep_rate !== 'undefined' ? fall_asleep_rate : FALL_ASLEEP_RATE;
    $("#text").animate({ opacity: 0.75}, fall_asleep_rate * 0.25, "linear",
            function() {
                $("#Eyes").fadeIn(fall_asleep_rate * 0.75);
            });
    $("#text").animate({ opacity: 0.0}, fall_asleep_rate * 0.75, "linear");
}

