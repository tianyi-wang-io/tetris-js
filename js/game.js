class GameManager {
    constructor() {
        this.initGame();
        window.addEventListener('keydown', this.handleKeydown.bind(this))
    }

    initGame() {
        this.tetris = new Tetris();
        this.currentTetris = this.tetris.tetrisQueue[0];
        this.nextTetris = this.tetris.tetrisQueue[1];
        drawBackground();
    }

    updateGame() {
        drawTetris(this.currentTetris);
    }

    handleKeydown(event) {
        if (event.keyCode == 40) this.tetris.moveDownTetris();
        else if (event.keyCode == 37) this.tetris.moveLeftTetris();
        else if (event.keyCode == 39) this.tetris.moveRightTetris();
    }

    gameLoop() {
        setInterval(this.updateGame.bind(this), 1000 / 5);
    }
    
}


const game = new GameManager()
console.log(game.currentTetris)
// game.gameLoop()
