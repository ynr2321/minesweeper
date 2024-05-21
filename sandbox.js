// minesweeper sandbox (testing)

// imports
const ps = require("prompt-sync")
const prompt = ps()
const lib = require('./lib');
const { Tile } = require('./tile');
// ---------------------------------------------


// test instanciating an array of tile objects


let board = lib.createTileArray(5)


