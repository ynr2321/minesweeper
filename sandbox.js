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

// checking it is indeed an array of 'Tile' objects
console.table(board1.grid)

// manually adding a mine and revealing
board1.grid[1][4].placeMine()
board1.grid[1][4].reveal()
board1.grid[1][4].updateProps()



board1.showState();

console.log(board1.grid[1][4].coordinate)




console.log('Breakpoint Passed')
