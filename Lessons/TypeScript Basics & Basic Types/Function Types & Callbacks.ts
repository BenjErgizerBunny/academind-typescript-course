function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

//defining a callback
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

//arguments for type function, states that it must be a function that passes that many parameters and with the specific types below
//names of arguments don't need to match arguments of function actually passed
//right side (after =>), you specify return type
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;

console.log("combineValues", combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log("result in addAndHandle", result);
});
