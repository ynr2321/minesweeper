// Useful functions for abstracting some logic into another file

// imports
const { Tile } = require('./tile');

// functions

// createTileArray
function createTileArray(size) {
    // Create the square array
    const newArray = Array.from({ length: size }, () => Array(size).fill(new Tile));
    
    // Print the array as a table
    console.table(newArray);
    
    // Return the array
    return newArray;
}


// exporting functions
module.exports = {
    createTileArray: createTileArray,
};
