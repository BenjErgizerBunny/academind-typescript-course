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
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("An error occured", 500);
console.log("result", result);
