// tile class 

class Tile {
    constructor() {
        this.isMine = false; 
        this.isRevealed = false; 
        this.isFlagged = false; 
        this.adjacentMines = 0; // Needs implementation
    }

    // Set this tile to be a mine
    placeMine() {
        this.isMine = true;
    }

  
    reveal() {
        // Implementation here
    }

    
    flag() {
        // Implementation here
    }

   
    incrementAdjacentMines() {
        // Implementation here
    }

    // Display the tile's status
    display() {
        // Implementation here
    }
}

module.exports = {
    Tile: Tile,
};

