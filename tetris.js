const squareSize = 40
const whiteSpace = 2
const canvas = document.getElementById('canvas')
const gameWindow = canvas.getBoundingClientRect()
const gameWindowWith = gameWindow.width;
const gameWindowHeight = gameWindow.height;
const ctx = canvas.getContext('2d')

function drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

let drawBackground = () => {
    drawRect(0, 0, canvas.width, canvas.height, '#9df5f5');
    for (let i = 0; i < gameWindowWith / 4; i++) {
        for (let j = 0; j < gameWindowHeight / 4; j++) {
            drawRect(
                i * squareSize + whiteSpace,
                j * squareSize + whiteSpace,
                squareSize - whiteSpace,
                squareSize - whiteSpace,
                '#c3a8f7'
            )
        }
    }
}

drawBackground()