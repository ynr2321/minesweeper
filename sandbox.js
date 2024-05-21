// minesweeper sandbox (testing)

// imports
const ps = require("prompt-sync")
const prompt = ps()
const lib = require('./lib');
const { Tile } = require('./tile');
const { Board } = require("./board");
// ---------------------------------------------


// test instanciating an array of tile objects

let size = 5

let board1 = new Board(size)

mani14 = board1.grid[1][4].state = 'row 1 col 4'

stateOf27 = board1.grid[0][3].state = 'row 0 col 3'

board1.showState();




console.log('Breakpoint Passed')

