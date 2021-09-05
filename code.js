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
var debugMode = false;



function startGame() {
    if (!isStarted) {
        isStarted = true;
        if (!debugMode) {
            gameTimer = setInterval(gameClock, 100);
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
    fillGridArray();
    drawParts();
}

function rotatePart() {
    // console.clear();
    clearGrid();

    parts[parts.length - 1].rotate();

    grid = new Grid(columns, rows, size, size);
    fillGridArray();
    drawParts();
}

function fillGridArray() {
    for (i = 0; i < parts.length; i++) {
        if (i < parts.length - 1) {
            parts[i].pieces.forEach(piece => {
                try {
                    Y[piece.location.y + parts[i].location.y][piece.location.x + parts[i].location.x] = true;
                    // throw "myException"; // Fehler wird ausgelöst
                }
                catch (e) {
                    // Anweisungen für jeden Fehler
                    // logMyErrors(e); // Fehler-Objekt an die Error-Funktion geben
                }
            });
        }
    }
}

function drawParts() {
    parts.forEach(Part => {
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

function checkAndDeleteFullColumns() {
    //   Y.forEach(element => {
    //         console.log(element);
    //     });

    var fullColumns = [];
  //  var changed = faslse;
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
    console.log(fullColumns);
    if (fullColumns.length > 0) {
        //Delete Columns
        /*
        for (i = 0; i < parts.length; i++) {
            if (i < parts.length - 1) {
                parts[i].location.y += 1;
            }
        }
        */
        for(var j = fullColumns.length-1; j >= 0 ; j--){
            for(var k = fullColumns-1; k > 0; k--){
               // Y[k] = Y[k--];  
               parts.forEach(Part => {
                   Part.forEach(Piece =>{
                        if (Piece.getLocation().y == k) {
                           
                        }
                   });
               });
            }
        }
        fullColumns.pop();
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