//Instance Variables
var isStarted = false;
var parts = [];
var grid = null;
var Y = [];
var gameTimer;


//Settings
var partColors = ["cyan", "blue", "orange", "yellow", "green", "purple", "red"];
var rows = 10;
var columns = 20;
var size = 30;



function startGame() {
    if (!isStarted) {
        gameTimer = setInterval(gameClock, 200);

        parts.push(new Part());

        drawParts(parts);

        isStarted = true;
    }
}

function gameClock() {
    console.clear();
    clearGrid();

    grid = new Grid(columns, rows, size, size);

    fillGridArray(parts);

    parts[parts.length - 1].update();

    drawParts(parts);
}

function movePart(side) {
    clearGrid();

    if (side == "left") {
        parts[parts.length - 1].moveLeft();
    } else if (side == "right") {
        parts[parts.length - 1].moveRight();
    }

    grid = new Grid(columns, rows, size, size);
    drawParts(parts);
}

function fillGridArray(partsArray) {
    for (i = 0; i < partsArray.length; i++) {
        if (i < partsArray.length - 1) {
            partsArray[i].pieces.forEach(piece => {
                Y[piece.location.y + partsArray[i].location.y][piece.location.x + partsArray[i].location.x] = true;
            });
        }
    }
}

function drawParts(partsArray) {
    partsArray.forEach(Part => {
        Part.pieces.forEach(piece => {
            var locX = piece.location.x;
            var locY = piece.location.y;

            // Y[locY + Part.location.y][locX + Part.location.x] = true;

            context.fillStyle = Part.color;
            context.fillRect(grid.xSize * (locX + Part.location.x), grid.ySize * (locY + Part.location.y), 30, 30)
        });
    });
}

function drawGrid(rows, columns, ySize, xSize) {
    Y = [];
    context.beginPath();
    for (row = 0; row < rows; row++) {
        Y.push([]);
        for (column = 0; column < columns; column++) {
            context.rect(column * xSize, row * ySize, xSize, ySize);
            Y[row].push(false);
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