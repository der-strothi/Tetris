//Instance Variables
var isStarted = false;
var parts = [];
var grid = null;

//Settings
var partColors = ["cyan", "blue", "orange", "yellow", "green", "purple", "red"];
var rows = 10;
var columns = 20;
var size = 30;



function startGame() {
    if (!isStarted) {
        setInterval(gameClock, 1000);

        parts.push(new Part());

        drawParts(parts);

        isStarted = true;
    }
}

function gameClock() {
    // console.log("Tick");

    clearGrid();

    grid = new Grid(columns, rows, size, size);

    parts.forEach(Part => {
        Part.update();
    });

    drawParts(parts);
}

function movePart(side) {
    clearGrid();

    if(side == "left") {
        parts[0].moveLeft();
    } else if(side == "right") {
        parts[0].moveRight();
    }

    grid = new Grid(columns, rows, size, size);
    drawParts(parts);
}

function drawParts(partsArray) {
    partsArray.forEach(Part => {
        Part.pieces.forEach(piece => {
            var locX = piece.location.x;
            var locY = piece.location.y;
    
            context.fillStyle = Part.color;
            context.fillRect(grid.xSize * (locX + Part.location.x), grid.ySize * (locY + Part.location.y), 30, 30)
        });
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

function clearGrid() {
    grid = null;
    context.clearRect(0, 0, size * rows + 1, size * columns + 1);
}

function randomPieceForm(min, max) {
    var rand = Math.random() * (max - min) + min;
    return Math.round(rand);
}