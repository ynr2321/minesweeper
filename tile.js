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
    updateVisual() {
        // if hidden mine is chosen
        if (this.isRevealed === true && this.isMine === true) {
            this.state = '💣'
            console.log('\nBOOOOOM!!, your performance was 💩!\nWe trust you to end the game yourself as win and lose conditions have not been added yet')
        }
        // if tile is flagged
        if (this.isRevealed === true && this.isFlagged === true) {
            this.state = '🚩'
        }
        // if tile is safe, show adj mine count
        if (this.isRevealed === true && this.isFlagged === false && this.isMine === false) {
            this.state = this.adjacentMines
        }  
    }

    placeMine() {
        this.isMine = true;
    }

  
    reveal() {
        this.isRevealed = true;
        console.log(`\nTile [${this.coordinate[0]},${this.coordinate[1]}] revealed.`)
    }

    
    flag() {
        this.isFlagged = true
    }


}


// exports
module.exports = {
    Tile: Tile,
};


