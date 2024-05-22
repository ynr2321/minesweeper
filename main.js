// minesweeper

// IMPORTS
const ps = require("prompt-sync")
const prompt = ps()
const lib = require('./lib');
const { GameManager } = require('./gameManager');



// GENERATE BOARD
GM = new GameManager();
gameBoard = GM.prepareGame()

let size = gameBoard.grid.length;


// PLAY FOR SIZE SQUARED TURNS
console.log('\n\t--------------------------------  Type \'end\' to exit game  --------------------------------\n')
for (let i = 0; i < size*size; i++) {


        X = lib.getCoordinates(); // the reveal choice
        if (X == 'END'){
            console.clear()
            break
        }
        A = lib.getAction();
        if (A == 'END'){
            console.clear()
            break
        }


        if (A == 'R' || A == 'r'){
            // reveal and update
            gameBoard.grid[X[0]][X[1]].reveal();
            //gameBoard.revealAdjZeros(gameBoard.grid[X[0]][X[1]]); // might break
            gameBoard.repeatRevealAdjZeros();
            gameBoard.updateVisuals(); // might break
        }
        if (A == 'F' || A == 'f'){
            // flag and update
            gameBoard.grid[X[0]][X[1]].flag();
            gameBoard.grid[X[0]][X[1]].updateVisual();
        }
    

        gameBoard.showState();
}


console.log('\n\t--------------------------------  G A M E   O V E R  --------------------------------\n')