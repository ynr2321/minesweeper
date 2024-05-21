// Board class

// imports
const { Tile } = require('./tile');
const lib = require('./lib');
// class

class Board {
    constructor(size) {
    this.size = size
    // create array of Tile objects using fuction abstracted to lib.js
    console.log('\n\t-------------------------------- C R E A T I N G   N E W   B O A R D --------------------------------\n')
    this.grid = lib.createObjectArray(size, Tile)

    }

    showState() {
        // Map each Tile object to its mainfestation property and create new table using that property as elements
        const manifestedGrid = this.grid.map(row => row.map(Tile => Tile.state));
        console.table(manifestedGrid);
    }

    updateVisuals() {
        // Update the visual representation of every tile on the board
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                console.log(`${i},${j}`)
            }
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




        // const directions = [
        //     [0, -1], // Left
        //     [0, 1],  // Right
        //     [-1, 0], // Above
        //     [1, 0],  // Below
        //     [-1, -1], // Top-left
        //     [-1, 1], // Top-right
        //     [1, -1], // Bottom-left
        //     [1, 1]   // Bottom-right
        //     ];
    }
}



// exports
module.exports = {
    Board: Board,
};