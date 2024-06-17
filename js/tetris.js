const squareSize = 40
const whiteSpace = 2
const canvas = document.getElementById('canvas')
const gameWindow = canvas.getBoundingClientRect()
const gameWindowWith = gameWindow.width;
const gameWindowHeight = gameWindow.height;
const ctx = canvas.getContext('2d')

let drawRect = (x, y, width, height, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
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

drawBackground();
let grid = new Grid(20, 10);