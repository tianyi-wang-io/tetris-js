const squareSize = 40
const whiteSpace = 2
const canvas = document.getElementById('canvas')
const gameWindow = canvas.getBoundingClientRect()
const gameWindowWith = gameWindow.width;
const gameWindowHeight = gameWindow.height;
const ctx = canvas.getContext('2d')

let drawRect = (x, y, width, height, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(y, x, width, height);
}

let drawBackground = () => {
    drawRect(0, 0, canvas.width, canvas.height, '#ffffff');
    for (let i = 0; i < gameWindowWith / 4; i++) {
        for (let j = 0; j < gameWindowHeight / 4; j++) {
            drawRect(
                i * squareSize + whiteSpace,
                j * squareSize + whiteSpace,
                squareSize - whiteSpace * 2,
                squareSize - whiteSpace * 2,
                '#e6d9ff'
            )
        }
    }
}

let drawTetris = (tetrisPiece) => {
    const array = tetrisPiece.piece
    const color = tetrisPiece.color
    const position = tetrisPiece.position
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++){
            if (array[i][j] == 1) {
                drawRect(
                    (i + position[0]) * squareSize + whiteSpace,
                    (j + position[1]) * squareSize + whiteSpace,
                    squareSize - whiteSpace * 2,
                    squareSize - whiteSpace * 2,
                    color
                )
            }
        }
    }
}