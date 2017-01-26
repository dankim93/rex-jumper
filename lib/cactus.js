class Cactus{
  constructor() {
    this.DIM_X = 600;
    this.DIM_Y = 270;
    this.dx = -2;
    this.img = document.getElementById('cactus');
  }
  drawCactus(ctx) {
    ctx.beginPath();
    // ctx.arc(this.DIM_X, this.DIM_Y, 10, 0, Math.PI*2);
    // ctx.rect(this.DIM_X, this.DIM_Y, 30, 30);
    ctx.drawImage(this.img, this.DIM_X, this.DIM_Y, 30, 30);
    ctx.fillStyle = "deepskyblue";
    ctx.fill();
    ctx.closePath();
    this.DIM_X += this.dx;

    if (this.DIM_X < 0) {
      this.DIM_X = 600;
      // this.dx = -1 * Math.random() * 3;
    }
  }
}

module.exports = Cactus;
