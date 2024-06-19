// minesweeper sandbox (testing)

// imports
const ps = require("prompt-sync")
const prompt = ps()
const lib = require('./lib');
const { Tile } = require('./tile');
const { Board } = require("./board");
const { GameManager } = require('./gameManager');
// ---------------------------------------------

// SIMULATING GAME AND REVEALING ALL TILES TO CHECK SANITY

// GENERATE BOARD
GM = new GameManager();
gameBoard = GM.prepareGame()

let size = gameBoard.grid.length;


gameBoard.showState();
// reveal all tiles
for (let i = 0; i < gameBoard.size; i++) {
    for (let j = 0; j < gameBoard.size; j++) {
        gameBoard.grid[i][j].reveal();
        gameBoard.grid[i][j].updateVisual()
        gameBoard.checkWinCondition();

    }
}


gameBoard.showState();







console.log('Breakpoint Passed')
