//we want the function to work with numbers and strings
function combine(input1: number | string, input2: number | string) {
  //this gives us an error because when a union type is defined, TS expects that it can be any type, not just the string or number that was actually defined so the + operator may not work on other types and therefore we get an error
  const result = input1 + input2;
  return result;
}

const combinedAges = combine(30, 26);

console.log(combinedAges);

const combinedNames = combine("Max", "Anna");

function combineWithRunTimeCheck(
  input1: number | string,
  input2: number | string
) {
  //therefore we can do a runtime check below

  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }
}
