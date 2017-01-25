class Cactus{
  constructor() {
    this.DIM_X = 600;
    this.DIM_Y = 290;
    this.dx = -1;
  }
  drawCactus(ctx) {
    ctx.beginPath();
    ctx.arc(this.DIM_X, this.DIM_Y, 10, 0, Math.PI*2);
    ctx.fillStyle = "deepskyblue";
    ctx.fill();
    ctx.closePath();
    this.DIM_X += this.dx;
    if (this.DIM_X === 0) {
      this.dx = -1 * this.dx;
    } else if (this.DIM_X === 580) {
      this.dx = -1;
    }
  }

}

module.exports = Cactus;
