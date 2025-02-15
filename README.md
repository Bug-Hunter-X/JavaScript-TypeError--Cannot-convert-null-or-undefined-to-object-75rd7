# JavaScript TypeError: Cannot convert null or undefined to object

This repository demonstrates a common JavaScript error: a `TypeError` thrown when attempting to use the addition operator (+) with null or undefined values.  The example code shows a function that attempts to add two numbers.  It includes a null check; however, this null check is insufficient to prevent the TypeError.  The solution demonstrates how to properly handle null or undefined values to prevent this error. The addition operator tries to convert the null values to objects before performing the addition, which fails and throws the TypeError. 

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `node bug.js` in your terminal.  You will see the `TypeError` being thrown.
4. Run `node bugSolution.js`. This will handle null values gracefully.