const { spyOn } = require("expect/lib");

function shout(string) {
    // it("receives one argument and returns it in all caps"
    return string.toUpperCase();
}


function whisper(string) {
    // it receives one argument and returns it in all lowercase.
    return string.toLowerCase();
}


function logShout(string) {
    // takes a string argument and logs it in all caps using console.log()
    const spy = console.log(shout(string));
}


function logWhisper(string) {
    // takes a string argument and logs it in all lowercase using console.log()
    const spy = console.log(whisper(string));
}


function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}