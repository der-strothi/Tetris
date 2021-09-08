//Instance Variables
var isStarted = false;
var activePart = null;
var parts = [];
var layingPieces = [];
var grid = null;
var Y = [];
var gameTimer;


//Settings
var partColors = ["cyan", "blue", "orange", "yellow", "green", "purple", "red"];
var rows = 10;
var columns = 20;
var size = 30;
var debugMode = false;



function startGame() {
    if (!isStarted) {
        isStarted = true;
        activePart = new Part();
        if (!debugMode) {
            gameTimer = setInterval(gameClock, 150);
        }

        drawActivePart();
        drawPieces(parts);

    }
}

function gameClock() {
    // console.clear();
    clearGrid();

    grid = new Grid(columns, rows, size, size);

    fillGridArray(parts);

    activePart.update();

    drawActivePart();
    drawPieces(parts);
}

function movePart(side) {
    if(activePart) {
        // console.clear();
        clearGrid();
    
        if (side == "left") {
            activePart.moveLeft();
        } else if (side == "right") {
            activePart.moveRight();
        }
    
        grid = new Grid(columns, rows, size, size);
        fillGridArray();
        drawActivePart();
        drawPieces();
    }
}

function rotatePart() {
    if(activePart) {
        // console.clear();
        clearGrid();
    
        activePart.rotate();
    
        grid = new Grid(columns, rows, size, size);
        fillGridArray();
        drawActivePart();
        drawPieces();
    }
}

function fillGridArray(activePartPieces, activePartLocation) {
    if (activePartPieces != undefined && activePartLocation != undefined) {
        activePartPieces.forEach(piece => {
            piece.setLocation(piece.location.x + activePartLocation.x, piece.location.y + activePartLocation.y);
            layingPieces.push(piece);
        });
    }

    for (i = 0; i < layingPieces.length; i++) {
        layingPieces.forEach(piece => {
            try {
                Y[piece.location.y][piece.location.x] = true;
                // throw "myException"; // Fehler wird ausgelöst
            }
            catch (e) {
                // Anweisungen für jeden Fehler
                // logMyErrors(e); // Fehler-Objekt an die Error-Funktion geben
            }
        });
    }
}

function drawActivePart() {
    activePart.pieces.forEach(piece => {
        var locX = piece.location.x;
        var locY = piece.location.y;

        context.fillStyle = activePart.color;
        context.fillRect(grid.xSize * (locX + activePart.location.x), grid.ySize * (locY + activePart.location.y), 30, 30)
    });
}

function drawPieces() {
    layingPieces.forEach(piece => {
        var locX = piece.location.x;
        var locY = piece.location.y;

        context.fillStyle = Part.color;
        context.fillRect(grid.xSize * (locX), grid.ySize * (locY), 30, 30)
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

function checkAndDeleteFullColumns() {
    //   Y.forEach(element => {
    //         console.log(element);
    //     });

    var fullColumns = [];
    for (var c = Y.length - 1; c > -1; c--) {
        var isColumnFull = true;
        Y[c].forEach(element => {
            if (element == false) {
                isColumnFull = false;
            }
        });



        if (isColumnFull == true) {
            console.log("FULL: " + c)
            fullColumns.push(c);
        }
    }
    // console.log(fullColumns);
    if (fullColumns.length > 0) {
        //Delete Columns
        var piecesToDelete = [];
        fullColumns.forEach(fullColumnNumber => {
            for (let index = 0; index < layingPieces.length; index++) {
                if (layingPieces[index].location.y == fullColumnNumber) {
                    piecesToDelete.push(layingPieces[index]);
                }
            }
        });
        piecesToDelete.forEach(piece => {
            layingPieces.splice(layingPieces.indexOf(piece), 1);
        });
        piecesToDelete = null;

        //Reihen über den fullColumns runter schieben
        var highestRow = Math.min(...fullColumns)
        console.log("Highest: " + highestRow);
        for (let index = 0; index < layingPieces.length; index++) {
            if (layingPieces[index].location.y < highestRow) {
                layingPieces[index].location.y++;
            }
        }
    }
}

function clearGrid() {
    grid = null;
    context.clearRect(0, 0, size * rows + 1, size * columns + 1);
}

function randomPieceForm(min, max) {
    var rand = Math.random() * (max - min) + min;
    return Math.round(rand);
}

function generatePieceID() {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};

function rotateArray(matrix) {
    let result = [];
    for(let i = 0; i < matrix[0].length; i++) {
        let row = matrix.map(e => e[i]).reverse();
        result.push(row);
    }
    return result;
};