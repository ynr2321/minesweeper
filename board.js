// Board class

// imports
const { Tile } = require('./tile');
const lib = require('./lib');
// class

class Board {
    constructor(size) {
    this.size = size
    this.totalMines = 0
    // create array of Tile objects using fuction abstracted to lib.js
    console.log('\n\t-------------------------------- C R E A T I N G   N E W   B O A R D --------------------------------\n')
    this.grid = lib.createObjectArray(size, Tile)

    }

    showState() {
        // This should be done after a tile's state is updated via the updateVisual() or updateVisuals() method
        // Map each Tile object to its mainfestation property and create new table using that property as elements
        const manifestedGrid = this.grid.map(row => row.map(Tile => Tile.state));
        console.table(manifestedGrid);
    }

    updateVisuals() {
        // iterate through the whole grid updating visuals
        for (let w = 0; w < this.size; w++){
            for (let i = 0; i < this.size; i++) {
                for (let j = 0; j < this.size; j++) {
                    this.grid[i][j].updateVisual()
                }
            }
    }
    }

    validateAdjMines() {
        // iterate through the whole grid updating visuals
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.grid[i][j].adjacentMines > this.totalMines){
                    this.grid[i][j].adjacentMines = this.totalMines
                }
            }
        }
    }

    checkWinCondition() {
        // iterate through grid and check win condition
        let revealedMineCount = 0;
        let revealCount = 0;
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                // increment revealed mine count
                if (this.grid[i][j].isMine === true && this.grid[i][j].isRevealed === true){
                    revealedMineCount =+ 1;
                }
                // increment revealed tile count
                if (this.grid[i][j].isRevealed === true) {
                    revealCount += 1;
                }
                console.log(revealCount)
            }
        }
        if (revealedMineCount > 0) {
            console.log('\nBOOOOOM!!, your performance was 💩!\nWe trust you to end the game yourself as win and lose conditions have not been added yet')
        }
        if (revealCount >= ((this.size*this.size) - this.totalMines)) {
            console.log("\n CONGRATS YOU WON THE GAME WOOOOOO")
        }
    }

    updateAdjMines(Tile) {
        // update adjacent mine count: input tile should have mine
        let i = Tile.coordinate[0]; let j = Tile.coordinate[1]; 
       
        if (this.grid[i][j].isMine === true){
            // LEFT
            try {
                this.grid[i][j-1].adjacentMines += 1;
            } catch (error) { 
                // Likely out of index - if so, just skip to the next
            }
            // RIGHT
            try {
                this.grid[i][j+1].adjacentMines += 1;
            } catch (error) { 
                // Likely out of index - if so, just skip to the next
            }
            // ABOVE
            try {
                this.grid[i-1][j].adjacentMines += 1;
            } catch (error) { 
                // Likely out of index - if so, just skip to the next
            }
            // BELOW
            try {
                this.grid[i+1][j].adjacentMines += 1;
            } catch (error) { 
                // Likely out of index - if so, just skip to the next
            }
            // TOP-LEFT
            try {
                this.grid[i-1][j-1].adjacentMines += 1;
            } catch (error) { 
                // Likely out of index - if so, just skip to the next
            }
            // TOP-RIGHT
            try {
                this.grid[i-1][j+1].adjacentMines += 1;
            } catch (error) { 
                // Likely out of index - if so, just skip to the next
            }
            // BOTTOM-LEFT
            try {
                this.grid[i+1][j-1].adjacentMines += 1;
            } catch (error) { 
                // Likely out of index - if so, just skip to the next
            }
            // BOTTOM-RIGHT
            try {
                this.grid[i+1][j+1].adjacentMines += 1;
            } catch (error) { 
                // Likely out of index - if so, just skip to the next
            }
        }


    }

    revealAdjZeros(Tile) {
        // reveal adjacent zeros: input tile should be revealed already
        let i = Tile.coordinate[0]; let j = Tile.coordinate[1]; 
       
        if (this.grid[i][j].isRevealed === true && this.grid[i][j].adjacentMines == 0){
            // LEFT
            try {
                if (this.grid[i][j-1].adjacentMines == 0) {
                    this.grid[i][j-1].isRevealed = true;
                }
            } catch (error) { 
                // Likely out of index - if so, just skip to the next
            }
            // RIGHT
            try {
                if (this.grid[i][j+1].adjacentMines == 0) {
                this.grid[i][j+1].isRevealed = true;
                }
            } catch (error) { 

            }
            // ABOVE
            try {
                if (this.grid[i-1][j].adjacentMines == 0) {
                this.grid[i-1][j].isRevealed = true;
                }
            } catch (error) { 

            }
            // BELOW
            try {
                if (this.grid[i+1][j].adjacentMines == 0) {
                this.grid[i+1][j].isRevealed = true;
                }
            } catch (error) { 

            }
            // TOP-LEFT
            try {
                if (this.grid[i-1][j-1].adjacentMines == 0) {
                this.grid[i-1][j-1].isRevealed = true;
                }
            } catch (error) { 

            }
            // TOP-RIGHT
            try {
                if (this.grid[i-1][j+1].adjacentMines == 0) {
                this.grid[i-1][j+1].isRevealed = true;
                }
            } catch (error) { 

            }
            // BOTTOM-LEFT
            try {
                if (this.grid[i+1][j-1].adjacentMines == 0) {
                this.grid[i+1][j-1].isRevealed = true;
                }
            } catch (error) { 

            }
            // BOTTOM-RIGHT
            try {
                if (this.grid[i+1][j+1].adjacentMines == 0) {
                this.grid[i+1][j+1].isRevealed = true;
                }
            } catch (error) { 

            }
        }
    }

    repeatRevealAdjZeros() {
        // iterate through the whole grid
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                if (this.grid[i][j].isRevealed === true){
                    this.revealAdjZeros(this.grid[i][j]);
                }
            }
        }
    }
    
}



// exports
module.exports = {
    Board: Board,
};