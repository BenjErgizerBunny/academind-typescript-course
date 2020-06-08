//spread operator 

const hobbies = ['Sports', 'cooking'];

const activeHobbies = ['Hiking']

//pushing hobbies here would give us an error because we're pushing an array of strings, not a string to an array of strings
//therefore we use the spread operator 
//spread operator pulls out all elements of the array and adds them as a list of values
activeHobbies.push(...hobbies)

const person = {
    name: 'Max',
    age: 30
};

//not actually copying the object.  Just copying the pointer in memory of person and assigning it to copiedPerson
const copiedPersonIncorrect = person;

//this properly copies the object
const copiedPerson = { ...person };
