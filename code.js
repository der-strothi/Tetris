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
var debugMode = true;



function startGame() {
    if (!isStarted) {
        isStarted = true;
        if(!debugMode) {
            gameTimer = setInterval(gameClock, 200);
        }

        parts.push(new Part());

        drawParts(parts);

    }
}

function gameClock() {
    // console.clear();
    clearGrid();

    grid = new Grid(columns, rows, size, size);

    fillGridArray(parts);

    parts[parts.length - 1].update();

    drawParts(parts);
}

function movePart(side) {
    // console.clear();
    clearGrid();
    
    if (side == "left") {
        parts[parts.length - 1].moveLeft();
    } else if (side == "right") {
        parts[parts.length - 1].moveRight();
    }
    
    grid = new Grid(columns, rows, size, size);
    fillGridArray(parts);
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

function checkForFullColumns() {
    console.log("checkFull");
    var fullColumns = [];
    for (var c = Y.length-1; c > -1; c--) {
        var isColumnFull = true;
        Y[c].forEach(element => {
            if(element = false) {
                isColumnFull = false;
            }
        });
        if(isColumnFull == true) {
            fullColumns.push[c]
        }
    }
    console.log(fullColumns);
}

function clearGrid() {
    grid = null;
    context.clearRect(0, 0, size * rows + 1, size * columns + 1);
}

function randomPieceForm(min, max) {
    var rand = Math.random() * (max - min) + min;
    return Math.round(rand);
}