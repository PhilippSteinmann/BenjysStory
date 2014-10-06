var FALL_ASLEEP_RATE = 1000;

function partOne() 
{
    // each part is broken up into sections. this is a technical necessity. one section runs, then there's a delay, then the next one. this section structure is needed to use the delays.
    var delay_between_sections = 500;
    var moveOnAutomatically = true;
    if (current_section == 1)
        delay_between_sections = 2000 + writeLine("The grass was cold. It smelled cold, like when it rained.");

    else if (current_section == 2) 
        delay_between_sections = 1000 + writeLine("I could feel my eyes. I looked at the grass but I could still feel my eyes.");

    else if (current_section == 3) {
        var eyesButton = createButton("Eyes", true);
        $("#buttons").append(eyesButton); 
        $("#Eyes").click(function() {
            partOne();
        } );


        moveOnAutomatically = false;
        fallAsleepPartOne(4000);
    }

    else if (current_section == 4) { 
        resetPartOne();
        //delay_between_sections = 1000 + writeLine("The grass kept going away. I tried to look but it kept going away.");
        $("#text").hide();
        //delay_between_sections = 1000 + writeLine("In the barn they were talking.");
        $("#text").html("The grass kept going away. I tried to look but it kept going away.<br><br>");
        $("#text").fadeIn(500);
        delay_between_sections = 2000;
    }

    else if (current_section == 5) {
        moveOnAutomatically = false;
        fallAsleepPartOne();
    }

    else if (current_section == 6) {
        resetPartOne();
        $("#text").hide();
        //delay_between_sections = 1000 + writeLine("In the barn they were talking.");
        $("#text").html("In the barn they were talking.<br><br>");
        $("#text").fadeIn(500);
        delay_between_sections = 1000;
    }

    else if (current_section == 7) {
        moveOnAutomatically = false;
        fallAsleepPartOne();
    }

    else if (current_section == 8) {
        resetPartOne();
        $("#text").hide();
        //delay_between_sections = 1000 + writeLine("The sun was on the grass but it wasn't warm. The sun was there but it wasn't.");
        $("#text").html("The sun was on the grass but it wasn't warm. The sun was there but it wasn't.<br><br>");
        $("#text").fadeIn(500);
        delay_between_sections = 1000;
    }

    else if (current_section == 9) {
        $("#text").fadeOut(1000);
        delay_between_sections = 1500;
    }

    else {
        current_section = 1;
        resetPartOne();
        partTwo();
        return;
    }


    current_section++;
    if (moveOnAutomatically)
        setTimeout(partOne, delay_between_sections);
}

function resetPartOne() {
        $("#text").text("");
        $("#Eyes").hide();
        $("#text").stop();
        $("#text").css({opacity: 1, display: "block"});
}

function fallAsleepPartOne(rate) {
    fall_asleep_rate = typeof rate !== 'undefined' ? rate : FALL_ASLEEP_RATE;
    $("#text").animate({ opacity: 0.66}, fall_asleep_rate * 0.33, "linear",
            function() {
                $("#Eyes").fadeIn(fall_asleep_rate * 0.66, "linear");
            });
    $("#text").animate({ opacity: 0.0}, fall_asleep_rate * 0.66, "linear");
}
