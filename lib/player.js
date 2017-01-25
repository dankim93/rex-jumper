class Player {
  constructor() {
    this.DIM_X = 90;
    this.DIM_Y = 280;
    this.dy = -1.5;
    this.img = document.getElementById('rex');
  }

  drawRex(ctx) {
    ctx.beginPath();
    // ctx.arc(this.DIM_X, this.DIM_Y, 10, 0, Math.PI*2);
    // ctx.rect(this.DIM_X, this.DIM_Y, 20, 20);
    ctx.drawImage(this.img, this.DIM_X, this.DIM_Y, 20, 20);
    ctx.fillStyle = "transparent";
    ctx.fill();
    ctx.closePath();
    this.DIM_Y += this.dy;

    if (this.DIM_Y <= 210) {
      this.dy = -1 * this.dy;
      // this.dy += 0.2;
    } else if (this.DIM_Y >= 280) {
      this.dy = 0;
    }
  }

  jump(ctx) {
    const music = new Audio("./assets/audio/jump.mp3");
    music.play();

    if (this.DIM_Y >= 280) {
      this.dy = -1.5;
    }
  }
}

module.exports = Player;
