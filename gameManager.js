
// imports
const ps = require("prompt-sync")
const prompt = ps()
const lib = require('./lib');
const { Tile } = require('./tile');
const { Board } = require("./board");

class GameManager {
        constructor() {
            this.totalMines = 0
            this.sizeChoice = 0
    }

    prepareGame() {
        // Generate board of chosen size
        this.sizeChoice = parseInt(prompt('Enter the size of the game: '))
        let gameBoard = new Board(this.sizeChoice)
        // Randomly place X mines where X is about 12% the board area
        this.totalMines = Math.round(0.12*this.sizeChoice*this.sizeChoice) 
        gameBoard.totalMines = this.totalMines
        for (let iter = 0; iter < this.totalMines; iter++) {
            let i = Math.floor(Math.random() * this.sizeChoice);
            let j = Math.floor(Math.random() * this.sizeChoice);

            gameBoard.grid[i][j].placeMine();
            gameBoard.grid[i][j].updateVisual();
            gameBoard.updateAdjMines(gameBoard.grid[i][j])

        }
        gameBoard.validateAdjMines();
        gameBoard.updateVisuals();

        // displaying
        gameBoard.showState();
        
        return gameBoard
    }
}




// exports
module.exports = {
    GameManager: GameManager,
};