"use strict";
var userInput;
var userName;
userInput = 5;
userInput = "Max";
//this would throw error because userInput type is unknown.  If it was any it wouldn't throw an error
//userName = userInput;
if (typeof userInput === "string") {
    userName = userInput;
}
//this function does not return nothing, it never returns
//the inferred type would be void because never wasn't build into TS at the beginning
//can leave it as void but you can make it really clear by setting it as never
////this improves code readability
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("An error occured", 500);
console.log("result", result);
