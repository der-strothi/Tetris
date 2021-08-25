var partColors = ["cyan","blue","orange","yellow","green","purple", "red"];

function drawPart(part) {
    part.pieces.forEach(piece => {
        var locX = piece.location.x;
        var locY = piece.location.y;

        context.fillStyle = part.color;
        console.log(part.color)
        context.fillRect(grid.xSize * locX, grid.ySize * locY, 30,30)
    });

    // array1.forEach(element => console.log(element));
}

function buildGrid(rows, columns, ySize, xSize) {
    context.beginPath();
    for (row = 0; row < rows; row++) {
        for (column = 0; column < columns; column++) {
            context.rect(column * xSize, row * ySize, xSize, ySize);
        }
    }
    context.stroke();
}

function randomPieceForm(min, max) {
    var rand = Math.random() * (max - min) + min;
    return Math.round(rand);
}