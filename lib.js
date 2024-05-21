// Useful functions for abstracting some logic into another file

// imports
const { Tile } = require('./tile');

// HELPER FUNCTIONS -----------------------------------------------------


// Create a square array of chosen size and filer object
function createObjectArray(size, FillClass) {
    const array = [];
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            row.push(new FillClass());
        }
        array.push(row);
    }
    return array;
}


// exporting functions
module.exports = {
    createObjectArray: createObjectArray,
};
