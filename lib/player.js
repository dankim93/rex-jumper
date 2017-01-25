class Player {
  constructor() {
    this.DIM_X = 90;
    this.DIM_Y = 290;
    this.dy = -1.5;
  }

  drawRex(ctx) {
    // ctx.beginPath();
    // ctx.arc(this.DIM_X, this.DIM_Y, 10, 0, Math.PI*2);
    // ctx.fillStyle = "black";
    // ctx.fill();
    // ctx.closePath();
    ctx.beginPath();
    ctx.arc(this.DIM_X, this.DIM_Y, 10, 0, Math.PI*2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    this.DIM_Y += this.dy;

    if (this.DIM_Y <= 220) {
      // this.dy = -1 * this.dy;
      this.dy += 0.5;
    } else if (this.DIM_Y === 290) {
      this.dy = 0;
    }
  }

  jump(ctx) {

    if (this.DIM_Y === 290) {
      this.dy = -1.5;
    }
  }
}

module.exports = Player;
