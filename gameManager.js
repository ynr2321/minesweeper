
// imports
const ps = require("prompt-sync")
const prompt = ps()
const lib = require('./lib');
const { Tile } = require('./tile');
const { Board } = require("./board");

class GameManager {
        constructor() {
            this.totalMines = 0
    }

    prepareGame() {
        // Generate board of chosen size
        let sizeChoice = parseInt(prompt('Enter the size of the game: '))
        let gameBoard = new Board(sizeChoice)
        // Randomly place X mines where X is about 12% the board area
        this.totalMines = Math.round(0.12*sizeChoice*sizeChoice) 
        
        for (let iter = 0; iter < this.totalMines; iter++) {
            let i = Math.floor(Math.random() * sizeChoice);
            let j = Math.floor(Math.random() * sizeChoice);

            gameBoard.grid[i][j].placeMine();
            gameBoard.grid[i][j].updateVisual();
            gameBoard.updateAdjMines(gameBoard.grid[i][j])

        }

        gameBoard.showState();
        
        return gameBoard
    }
}




// exports
module.exports = {
    GameManager: GameManager,
};