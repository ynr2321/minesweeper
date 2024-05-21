// Useful functions for abstracting some logic into another file

// imports
const { Tile } = require('./tile');

// functions

// createTileArray
function createObjectArray(size, fillClass) {
    // Create the square array
    const newArray = Array.from({ length: size }, () => Array(size).fill(new fillClass));
    
    // Print the array as a table (remove this debug later)
    console.table(newArray);
    
    // Return the array
    return newArray;
}


// exporting functions
module.exports = {
    createObjectArray: createObjectArray,
};
