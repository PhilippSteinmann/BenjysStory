function partTwo() {
    var delay_between_sections = 500;
    var moveOnAutomatically = true;

    if (current_section == 1) {
        $("#text").html("");
        var lines_to_write = ['"Come on Benjy, they is ready in there. Wake up now."',
            '"They did woke you early but its time. Get up now."',
            '"Here\'s a flower. Look at that and get up."',
            'We walked. It was cold.',
            '"Aint going to hurt at all. You\'ll see. After that you can sleep all day long."',
            'Mother was coming down the hill. "Take care of him, now," she said. She was coming down the hill.',
            '"Dont worry now Ms. Compson," Versh said.',
            '"Take care of him. If I had the strength I would be there to hold his hand."',
            '"Dont worry, he got the doctor."',
            '"You know it breaks my heart to see him like this," Mother said.'];
        var delay_between_sections = writeMultipleLines(lines_to_write);
        delay_between_sections -= (lines_to_write[lines_to_write.length - 1].length * DELAY_BETWEEN_LINES_PER_CHAR) * 0.9
    }

    else if (current_section == 2) {
        $("#text").text("");
        var lines_to_write = [
            'It breaks my heart to think that Benjy, my son---',
            'He won\'t notice at all, Caroline.',
            'I bet he will. I bet he will.',
            'You know he can\'t use them at all.',
            'How could you say that Jason he\'s your brother'];
        delay_between_sections = writeMultipleLines(lines_to_write, true, 30);
        delay_between_sections -= (lines_to_write[lines_to_write.length - 1].length * DELAY_BETWEEN_LINES_PER_CHAR) * 0.5
    }

    else if (current_section == 3) {
        $("#text").text("");
        var lines_to_write = [
            '"Go on inside, Ms. Compson," Versh said.',
            '"Yes," Mother said.'];
        delay_between_sections = writeMultipleLines(lines_to_write);
    }

    current_section++;
    if (moveOnAutomatically)
        setTimeout(partTwo, delay_between_sections);
}
