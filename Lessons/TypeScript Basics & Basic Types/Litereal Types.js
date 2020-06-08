"use strict";
//we want the function to work with numbers and strings
function combineWithRunTimeCheck(input1, input2, resultConversion //can define this as a string but since we want to it to be specific strings, use a union type for the literal type
) {
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
