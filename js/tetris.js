class Tetris {
    constructor() {
        this.whiteSpace = 2;
        this.board = Array.from({ length: 10 }, () => Array(10).fill(0))
        this.tetrisIndex = ['I', 'O', 'J', 'L', 'S', 'Z', 'T'];
        this.tetrisQueue = [];
        this.generateTetris();
    }

    getRandomShapeKey() {
        // 2 tetris on hold: first one will be ongoing, second one is next tetris
        const randomIndex = Math.floor(Math.random() * this.tetrisIndex.length);
        return this.tetrisIndex[randomIndex]
    }

    generateTetris() {
        while (this.tetrisQueue.length < 2) {
            const key = this.getRandomShapeKey();
            const piece = Shape.getShape(key);
            const color = Shape.getColor(key);
            const position = [0, 3]  // center the Tetris
            const tetris = { 'key': key, 'color': color, 'position': position, 'piece': piece };
            this.tetrisQueue.push(tetris);
        }
    }

    removeTetris() {
        const tetris = this.tetrisQueue.shift();
        this.generateTetris()
        return tetris
    }

    rotate() {
        Shape.rotate(this.tetrisQueue[0])
    }

    moveDownTetris() {
        this.tetrisQueue[0].position[0]++;
    }

    moveLeftTetris() {
        this.tetrisQueue[0].position[1]--;
    }

    moveRightTetris() {
        this.tetrisQueue[0].position[1]++;
    }

}