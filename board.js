// Board class

// imports
const { Tile } = require('./tile');
const lib = require('./lib');
// class

class Board {
    constructor(size) {

    // create array of Tile objects using fuction abstracted to lib.js
    console.log('\n\tCREATING NEW BOARD\n')
    this.grid = lib.createObjectArray(size, Tile)

    }

    showState() {
    // Map each Tile object to its mainfestation property and create new table using that property as elements
    const maniGrid = this.grid.map(row => row.map(Tile => Tile.state));

    console.table(maniGrid);
}
}



// exports
module.exports = {
    Board: Board,
};