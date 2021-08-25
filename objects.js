class Part {
    constructor() {

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

class Location{
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}