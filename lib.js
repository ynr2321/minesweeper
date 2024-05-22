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
    let input = prompt("Enter coordinates of tile you want to select in the format row,col: ").trim();
  
    if (input === 'End' || input === 'END' || input === 'end'){
        return 'END'
    }

    let parts = input.split(',');

    let coordinates = parts.map(Number);

    return coordinates;

  }

  function getAction() {

    console.log('\n')
    let input = prompt("Enter the action to perform on tile (F - flag | R - reveal): ").trim();
  
    if (input === 'End' || input === 'END' || input === 'end'){
        return 'END'
    }

    while (true) {
        // Check if the input is either 'F' or 'R'
        if (input === 'F' || input === 'R' || input === 'f' || input === 'r') {
          return input;
        }
        // re-prompt until format correct
        alert("Invalid input. Please enter 'F' for flag or 'R' for reveal.");
      }


  }

// exporting functions
module.exports = {
    createObjectArray: createObjectArray,
    getCoordinates: getCoordinates,
    getAction: getAction,
};

