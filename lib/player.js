class Player {
  constructor() {
    this.DIM_X = 90;
    this.DIM_Y = 290;
  }

  drawRex(ctx) {
    ctx.beginPath();
    ctx.arc(90, 290, 10, 0, Math.PI*2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
  }
}

module.exports = Player;
