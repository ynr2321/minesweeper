// tile class 

class Tile {
    constructor() {
        this.isMine = false; 
        this.isRevealed = false; 
        this.isFlagged = false; 
        this.adjacentMines = 0 // TASK: create func which increments this

        this.state = '?'
    }

    placeMine() {
        this.isMine = true;
        // TASK: logic that increments adjacentMines property of tiles adjacent to where bomb is placed
    }

  
    reveal() {
        // Placeholder
    }

    
    flag() {
        // Placeholder
    }

   
    incrementAdjacentMines() {
        // Placeholder
    }

    display() {
        // Placeholder

    }
}


// exports
module.exports = {
    Tile: Tile,
};

