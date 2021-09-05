class Part {
    constructor() {
        this.pieces = [];

        this.pieceForm = randomPieceForm(0, 6);
        this.color = partColors[this.pieceForm];

        this.dimension = null;

        this.buildPart(this.pieceForm);

        this.location = new Location(rows / 2, 0);

    }

    update() {
        if (this.location.y < columns - this.dimension.y) {
            // var canMove = true;

            // this.pieces.forEach(Piece => {
            //     if (Y[Piece.location.y + this.location.y + 1][Piece.location.x + this.location.x] == true) {
            //         canMove = false;
            //     }
            // });
            (this.canMove("down")) ? this.location.y++ : parts.push(new Part());
        } else {
            parts.push(new Part());
        }
    }

    moveLeft() {
        if (this.location.x > 0) {
            (this.canMove("left")) ? this.location.x-- : 0;
        }
    }

    moveRight() {
        if (this.location.x < rows - this.dimension.x) {
            (this.canMove("right")) ? this.location.x++ : 0;
        }
    }

    rotate() {
        console.log("rotate");
        var piece2D = [];
        for (var y = 0; y < this.dimension.y; y++) {
            piece2D.push([]);
            for (let x = 0; x < this.dimension.x; x++) {
                piece2D[y].push(0);
            }
        }
        // console.log(piece2D);
        this.pieces.forEach(piece => {
            var locX = piece.location.x;
            var locY = piece.location.y;

            piece2D[locY][locX] = 1;
        });


        //Do som rotaty shit





        piece2D.forEach(element => {
            console.log(element);
        });
    }

    canMove(direction) {
        // Y.forEach(element => {
        //     console.log(element);
        // });

        var canMove = true;

        var xOffset = 0;
        var yOffset = 0;

        if (direction == "down") {
            yOffset++;
        } else if (direction == "left") {
            xOffset--;
        } else if (direction == "right") {
            xOffset++;
        }

        this.pieces.forEach(Piece => {
            if (Y[Piece.location.y + this.location.y + yOffset][Piece.location.x + this.location.x + xOffset] == true) {
                canMove = false;
            }
        });
        return canMove;
    }

    buildPart(form) {
        switch (form) {
            case 0:
                //I (4 Pieces)
                //                         X  Y
                this.pieces.push(new Piece(0, 0));
                this.pieces.push(new Piece(1, 0));
                this.pieces.push(new Piece(2, 0));
                this.pieces.push(new Piece(3, 0));
                this.dimension = new Location(4, 1);
                break;
            case 1:
                //L (Inverted) (4 Pieces)
                //                         X  Y
                this.pieces.push(new Piece(1, 0));
                this.pieces.push(new Piece(1, 1));
                this.pieces.push(new Piece(1, 2));
                this.pieces.push(new Piece(0, 2));
                this.dimension = new Location(2, 3);
                break;
            case 2:
                //L (4 Pieces)
                //                         X  Y
                this.pieces.push(new Piece(0, 0));
                this.pieces.push(new Piece(0, 1));
                this.pieces.push(new Piece(0, 2));
                this.pieces.push(new Piece(1, 2));
                this.dimension = new Location(2, 3);
                break;
            case 3:
                //o (4 Pieces)
                //                         X  Y
                this.pieces.push(new Piece(0, 0));
                this.pieces.push(new Piece(0, 1));
                this.pieces.push(new Piece(1, 1));
                this.pieces.push(new Piece(1, 0));
                this.dimension = new Location(2, 2);
                break;
            case 4:
                //z (inverted) (4 Pieces)
                //                         X  Y
                this.pieces.push(new Piece(0, 1));
                this.pieces.push(new Piece(1, 1));
                this.pieces.push(new Piece(1, 0));
                this.pieces.push(new Piece(2, 0));
                this.dimension = new Location(3, 2);
                break;
            case 5:
                //T (4 Pieces)
                //                         X  Y
                this.pieces.push(new Piece(0, 1));
                this.pieces.push(new Piece(1, 1));
                this.pieces.push(new Piece(2, 1));
                this.pieces.push(new Piece(1, 0));
                this.dimension = new Location(3, 2);
                break;
            case 6:
                //z (4 Pieces)
                //                         X  Y
                this.pieces.push(new Piece(0, 0));
                this.pieces.push(new Piece(1, 0));
                this.pieces.push(new Piece(1, 1));
                this.pieces.push(new Piece(2, 1));
                this.dimension = new Location(3, 2);
                break;
        }
    }
}

class Piece {
    constructor(xLoc, yLoc) {
        this.location = new Location(xLoc, yLoc);
    }

    setLocation(x, y) {
        this.location.x = x;
        this.location.y = y;
    }

    getLocation() {
        return this.location;
    }
}
class Location {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Grid {
    constructor(rows, columns, ySize, xSize) {
        this.rows = rows;
        this.columns = columns;
        this.ySize = ySize;
        this.xSize = xSize;

        drawGrid(this.rows, this.columns, this.ySize, this.xSize);
    }
}