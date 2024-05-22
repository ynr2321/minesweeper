// Useful functions for abstracting some logic into another file

// imports
const { Tile } = require('./tile');
const ps = require("prompt-sync")
const prompt = ps()
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

function getCoordinates() {

    console.log('\n')
    let input = prompt("Enter coordinates of tile you want to reveal in the format row,col: ").trim();
  
    if (input === 'End' || input === 'END' || input === 'end'){
        return 'END'
    }

    let parts = input.split(',');

    let coordinates = parts.map(Number);

    return coordinates;

  }

// exporting functions
module.exports = {
    createObjectArray: createObjectArray,
    getCoordinates: getCoordinates,
};

