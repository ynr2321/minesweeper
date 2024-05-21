// minesweeper sandbox (testing)

// imports
const ps = require("prompt-sync")
const prompt = ps()
const lib = require('./lib');
const { Tile } = require('./tile');
const { Board } = require("./board");
// ---------------------------------------------


// test instanciating an array of tile objects

let size = 10

let board1 = new Board(size)

mani14 = board1.grid[1][4].manifestation = 'row 1 col 4'

mani14 = board1.grid[1][4].manifestation = 'row 1 col 4'

board1.showState();
// // Map each Tile object to its name property
// const maniGrid = board1.grid.map(row => row.map(Tile => Tile.manifestation));

// // Print the transformed array using console.table
// console.table(maniGrid);



console.log('Breakpoint Passed')

