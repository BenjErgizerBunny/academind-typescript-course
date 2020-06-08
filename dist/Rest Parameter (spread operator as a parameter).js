"use strict";
const add = (...numbers) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);
};
const addedNumbers = add(4, 5, 6, 7, 6);
console.log(addedNumbers);
//# sourceMappingURL=Rest Parameter (spread operator as a parameter).js.map