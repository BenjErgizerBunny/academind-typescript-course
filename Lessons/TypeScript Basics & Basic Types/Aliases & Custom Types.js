"use strict";
//Type Aliases and Custom Types
function combineWithRunTimeCheck(input1, input2, resultConversion) {
    //therefore we can do a runtime check below
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combineWithRunTimeCheck(30, 26, "as-number");
console.log(combinedAges);
var combinedStringAges = combineWithRunTimeCheck(30, 26, "as-number");
console.log(combinedStringAges);
var combinedNames = combineWithRunTimeCheck("Max", "Anna", "as-text");
console.log(combinedNames);
