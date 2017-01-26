class Bird{
  constructor() {
    this.DIM_X = 600;
    this.DIM_Y = 220;
    this.dx = -1.5;
    this.img = document.getElementById('bird');
  }
  drawBird(ctx) {
    ctx.beginPath();
    // ctx.arc(this.DIM_X, this.DIM_Y, 10, 0, Math.PI*2);
    // ctx.rect(this.DIM_X, this.DIM_Y, 20, 20);
    ctx.drawImage(this.img, this.DIM_X, this.DIM_Y, 20, 20);
    ctx.fillStyle = "deepskyblue";
    ctx.fill();
    ctx.closePath();
    this.DIM_X += this.dx;
    if (this.DIM_X < 0) {
      this.DIM_X = 800;
    }
  }
}

module.exports = Bird;
