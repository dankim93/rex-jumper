class Cloud{
  constructor() {
    this.DIM_X = 600;
    this.DIM_Y = 100;
    this.dx = -0.2;
    this.img = document.getElementById('cloud');
  }
  drawCloud(ctx) {
    ctx.beginPath();
    // ctx.arc(this.DIM_X, this.DIM_Y, 10, 0, Math.PI*2);
    // ctx.rect(this.DIM_X, this.DIM_Y, 20, 20);
    ctx.drawImage(this.img, this.DIM_X, this.DIM_Y, 250, 100);
    ctx.fill();
    ctx.closePath();
    this.DIM_X += this.dx;
    // console.log(this.DIM_X);
    if (this.DIM_X < -240) {
       this.DIM_X = 600;
    }
  }
}

module.exports = Cloud;
