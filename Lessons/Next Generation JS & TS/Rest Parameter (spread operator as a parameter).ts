//Rest Parameters 

//want to add as many values as user passes in
//using spread operator as an argument, will merge paramaters into an array
const add = (...numbers: number[]) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue
    }, 0);
}


const addedNumbers = add(4,5,6,7,6);

console.log(addedNumbers)