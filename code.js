function randomPieceForm(min, max) {
    var rand = Math.random() * (max - min) + min;
    return Math.round(rand);
  }