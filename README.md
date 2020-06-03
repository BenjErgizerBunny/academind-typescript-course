# Project for the Academind TypeScript Course

## Core Types of TypeScript

1. number
   - no differentiation between integers or floats, just as in JS
2. strings
3. boolean
   - just true and false, not truthy/falsy values (eg 0, undefined, null)

## Other TypeScript Features

1. TypeScript is statically typed vs JS is dynamically typed
2. TypeScript knows about more types than JS
   - I assume this means arrays and objects
3. Type Inference means you don't need to explicitly set the type of a variable (var, const or let) because TypeScript will automatically set the type based on the initialized value
   - One exception is when declaring a variable that is not assigned yet. In that case use `let number1: number;` to set the type
