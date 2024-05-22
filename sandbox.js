// minesweeper sandbox (testing)

// imports
const ps = require("prompt-sync")
const prompt = ps()
const lib = require('./lib');
const { Tile } = require('./tile');
const { Board } = require("./board");
// ---------------------------------------------

// SIMULATING GAME AND REVEALING ALL TILES TO CHECK SANITY

// Generate board of chosen size
let sizeChoice = parseInt(prompt('Enter the size of the game: '))
let gameBoard = new Board(sizeChoice)
// Randomly place X mines where X is about 12% the board area
let totalMines = Math.round(0.12*sizeChoice*sizeChoice) 
for (let iter = 0; iter < totalMines; iter++) {
    let i = Math.floor(Math.random() * sizeChoice);
    let j = Math.floor(Math.random() * sizeChoice);

    gameBoard.grid[i][j].placeMine();
    gameBoard.grid[i][j].updateVisual();
    gameBoard.updateAdjMines(gameBoard.grid[i][j])

}


gameBoard.showState();
// reveal all tiles
for (let i = 0; i < sizeChoice; i++) {
    for (let j = 0; j < sizeChoice; j++) {
        gameBoard.grid[i][j].reveal();
        gameBoard.grid[i][j].updateVisual()
    }
}


gameBoard.showState();







console.log('Breakpoint Passed')
