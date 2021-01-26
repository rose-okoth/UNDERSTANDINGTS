// unknown type

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Rio";
if (typeof userInput === "string") {
    userName = userInput;
}

// never type

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
} // never returns a value

generateError("An error occured", 500);