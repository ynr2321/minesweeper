// Useful functions for abstracting some logic into another file

// imports
const { Tile } = require('./tile');

// functions

// createTileArray
function createObjectArray(size, fillClass) {

    // Creating square away of chosen size and fill class
    const newArray = Array.from({ length: size }, () => Array(size).fill(new fillClass));
    
    // Print the array as a table (remove this debug later)
    console.table(newArray);
    
    return newArray;
}


// exporting functions
module.exports = {
    createObjectArray: createObjectArray,
};
