function firstWord(s) {
    // Trim leading spaces to ensure correct first word detection
    s = s.trimStart();

    if (s.length === 0) {
        return s;
    }

    const spaceIndex = s.indexOf(' ');

    if (spaceIndex === -1) {
        return s;
    }

    return s.substring(0, spaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
