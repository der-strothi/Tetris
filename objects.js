class Part {
    constructor() {
        this.pieces = [];

        var pieceForm = randomPieceForm(0, 9);
        this.buildPart(pieceForm);
    }

    buildPart(form) {
        switch (form) {
            case 0:
                //+ (5 Pieces)
                //                         X  Y
                this.pieces.push(new Piece(1, 0));
                this.pieces.push(new Piece(0, 1));
                this.pieces.push(new Piece(1, 1));
                this.pieces.push(new Piece(2, 1));
                this.pieces.push(new Piece(1, 2));
                break;
            case 1:
                //L (4 Pieces)
                //                         X  Y
                this.pieces.push(new Piece(0, 0));
                this.pieces.push(new Piece(0, 1));
                this.pieces.push(new Piece(0, 2));
                this.pieces.push(new Piece(1, 2));
                break;
            case 2:
                //L (Inverted) (4 Pieces)
                //                         X  Y
                this.pieces.push(new Piece(1, 0));
                this.pieces.push(new Piece(1, 1));
                this.pieces.push(new Piece(1, 2));
                this.pieces.push(new Piece(0, 2));
                break;
            case 3:
                //I (3 Pieces)
                //                         X  Y
                this.pieces.push(new Piece(0, 0));
                this.pieces.push(new Piece(0, 1));
                this.pieces.push(new Piece(0, 2));
                break;
            case 4:
                //I (4 Pieces)
                //                         X  Y
                this.pieces.push(new Piece(0, 0));
                this.pieces.push(new Piece(0, 1));
                this.pieces.push(new Piece(0, 2));
                this.pieces.push(new Piece(0, 3));
                break;
            case 5:
                //I (5 Pieces)
                //                         X  Y
                this.pieces.push(new Piece(0, 0));
                this.pieces.push(new Piece(0, 1));
                this.pieces.push(new Piece(0, 2));
                this.pieces.push(new Piece(0, 3));
                this.pieces.push(new Piece(0, 4));
                break;
            case 6:
                //T (4 Pieces)
                //                         X  Y
                this.pieces.push(new Piece(0, 0));
                this.pieces.push(new Piece(1, 0));
                this.pieces.push(new Piece(2, 0));
                this.pieces.push(new Piece(1, 1));
                break;
            case 7:
                //T (5 Pieces)
                //                         X  Y
                this.pieces.push(new Piece(0, 0));
                this.pieces.push(new Piece(1, 0));
                this.pieces.push(new Piece(2, 0));
                this.pieces.push(new Piece(1, 1));
                this.pieces.push(new Piece(1, 2));
                break;
            case 8:
                //L (3 Pieces)
                //                         X  Y
                this.pieces.push(new Piece(0, 0));
                this.pieces.push(new Piece(0, 1));
                this.pieces.push(new Piece(0, 2));
                break;
            case 9:
                //o (4 Pieces)
                //                         X  Y
                this.pieces.push(new Piece(0, 0));
                this.pieces.push(new Piece(1, 0));
                this.pieces.push(new Piece(0, 1));
                this.pieces.push(new Piece(1, 1));
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

        buildGrid(this.rows, this.columns, this.ySize, this.xSize);
    }
}