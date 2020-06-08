//! tells TS to ignore the fact that something can be null.  We can do this when we as the developer know it will not be null
//however better to use the if condition below 
const button = document.querySelector('button')!;

function clickHandler(message: string) {
    console.log('Clicked handler'+ message)
}

//we can use this instead of ! to make sure that an error will not occur if a variable is null.  TS understands this code and will therefore not throw an error when compiling
if(button){
    //bind below was to demonstrate how strictBindCallApply.  Don't fully understand bc I need to learn bind
    button.addEventListener('click', clickHandler.bind(null, 'hello'))
}
