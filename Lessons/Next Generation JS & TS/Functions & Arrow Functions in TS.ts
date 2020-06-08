//arrow functions 

//if one expression , can omit the curly braces 
// function with one parameter, don't need braces in JS but in TS if you're doing type assignment inside arguments, then you need to have braces
const oneParameter = (a: number) => a

console.log(oneParameter(2))

//can assign the function type and then simplify arguments and don't need braces for only one agrument 

const printOutput: (a: number | string) => void = output => console.log(output)

//default value for functions

const defaultArugment = (a: number, b: number = 1) => a + b;

//if you have a default argument, you are not required to pass in that argument 
//default arguments need to be last in the list because parameters are passed in seqential order to match up with arguments 
printOutput(defaultArugment(1, 2)) 