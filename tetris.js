/** @type {CanvasRenderingContext2D} */
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

function drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

let drawBackground = () => {
    drawRect(0, 0, 400, 800, '#9df5f5')
}

drawBackground()