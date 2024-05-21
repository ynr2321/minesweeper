// Board class

// imports
const { Tile } = require('./tile');
const lib = require('./lib');
// class

class Board {
    constructor(size) {

    // create array of Tile objects using fuction abstracted to lib.js
    this.board = lib.createObjectArray(size, Tile)

    }
}



// exports
module.exports = {
    Board: Board,
};