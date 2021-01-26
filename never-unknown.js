"use strict";
// unknown type
var userInput;
var userName;
userInput = 5;
userInput = "Rio";
if (typeof userInput === "string") {
    userName = userInput;
}
// never type
function generateError(message, code) {
    throw { message: message, errorCode: code };
} // never returns a value
generateError("An error occured", 500);
