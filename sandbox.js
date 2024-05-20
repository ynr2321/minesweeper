// minesweeper sandbox (testing)

// imports
const ps = require("prompt-sync")
const prompt = ps()
const lib = require('./lib');
// ---------------------------------------------

function createSquareArray(size, value = 1) {
    // Create the square array
    const newArray = Array.from({ length: size }, () => Array(size).fill(value));
    
    // Print the array as a table
    console.table(newArray);
    
    // Return the array for further use
    return newArray;
}

// Example usage
const squareArray = createSquareArray(5);

console.log(squareArray[2])


// logic

// var newArray = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
// console.table(newArray);