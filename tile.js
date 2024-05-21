// tile class 


class Tile {
    constructor() {
        this.coordinate = null // will be set by Board constructor
        this.isMine = false; 
        this.isRevealed = false; 
        this.isFlagged = false; 
        this.adjacentMines = 0 // TASK: create func which increments this

        this.state = '?'
    }
    // METHODS
    updateProps() {
        // if hidden mine is chosen
        if (this.isRevealed === true && this.isMine === true) {
            this.state = '💣'
        }
        // if tile is flagged
        if (this.isRevealed === true && this.isFlagged === true) {
            this.state = '🚩'
        }
        
    }

    placeMine() {
        this.isMine = true;
        // TASK: logic that increments adjacentMines property of tiles adjacent to where bomb is placed
    }

  
    reveal() {
        this.isRevealed = true;
    }

    
    flag() {
        this.isFlagged = true
    }


}


// exports
module.exports = {
    Tile: Tile,
};


