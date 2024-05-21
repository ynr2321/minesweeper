// Useful functions for abstracting some logic into another file

// imports
const { Tile } = require('./tile');

// HELPER FUNCTIONS -----------------------------------------------------



function createObjectArray(size, FillClass) {
    const array = [];
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            const tile = new FillClass();
            // save the coordinate the tile is appended to in the coordinate property
            tile.coordinate = [i, j];
            row.push(tile);
        }
        array.push(row);
    }
    return array;
}

function incrementAdjacentMines() {
    
}

// exporting functions
module.exports = {
    createObjectArray: createObjectArray,
};


// const directions = [
//     [0, -1], // Left
//     [0, 1],  // Right
//     [-1, 0], // Above
//     [1, 0],  // Below
//     [-1, -1], // Top-left
//     [-1, 1], // Top-right
//     [1, -1], // Bottom-left
//     [1, 1]   // Bottom-right
// ];