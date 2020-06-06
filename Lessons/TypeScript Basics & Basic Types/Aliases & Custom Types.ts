//Type Aliases and Custom Types

//name of type can be any name thats not a built in word for JS or TS
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combineWithRunTimeCheck(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  //therefore we can do a runtime check below
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
const combinedAges = combineWithRunTimeCheck(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combineWithRunTimeCheck(30, 26, "as-number");

console.log(combinedStringAges);

const combinedNames = combineWithRunTimeCheck("Max", "Anna", "as-text");
console.log(combinedNames);
