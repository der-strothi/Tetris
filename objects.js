class Part {
    constructor() {
        this.pieces = [];

        this.pieceForm = randomPieceForm(0, 6);
        this.color = partColors[this.pieceForm];


        this.buildPart(this.pieceForm);

        this.location = new Location(rows / 2,0);
    }

    update() {
        this.location.y++;
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
                break;
            case 1:
                //L (Inverted) (4 Pieces)
                //                         X  Y
                this.pieces.push(new Piece(1, 0));
                this.pieces.push(new Piece(1, 1));
                this.pieces.push(new Piece(1, 2));
                this.pieces.push(new Piece(0, 2));
                break;
            case 2:
                 //L (4 Pieces)
                //                         X  Y
                this.pieces.push(new Piece(0, 0));
                this.pieces.push(new Piece(0, 1));
                this.pieces.push(new Piece(0, 2));
                this.pieces.push(new Piece(1, 2));
                break;
            case 3:
                //o (4 Pieces)
                //                         X  Y
                this.pieces.push(new Piece(0, 0));
                this.pieces.push(new Piece(0, 1));
                this.pieces.push(new Piece(1, 1));
                this.pieces.push(new Piece(1, 0));
                break;
            case 4:
                //z (inverted) (4 Pieces)
                //                         X  Y
                this.pieces.push(new Piece(0, 1));
                this.pieces.push(new Piece(1, 1));
                this.pieces.push(new Piece(1, 0));
                this.pieces.push(new Piece(2, 0));
                break;
            case 5:
                //T (4 Pieces)
                //                         X  Y
                this.pieces.push(new Piece(0, 1));
                this.pieces.push(new Piece(1, 1));
                this.pieces.push(new Piece(2, 1));
                this.pieces.push(new Piece(1, 0));
                break;
            case 6:
                //z (4 Pieces)
                //                         X  Y
                this.pieces.push(new Piece(0, 0));
                this.pieces.push(new Piece(1, 0));
                this.pieces.push(new Piece(1, 1));
                this.pieces.push(new Piece(2, 1));
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