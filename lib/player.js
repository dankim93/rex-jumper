class Player {
  constructor() {
    this.DIM_X = 90;
    this.DIM_Y = 270;
    this.dy = -1.5;
    this.img = document.getElementById('rex');
    this.double = 3;
  }

  drawRex(ctx) {
    ctx.beginPath();
    // ctx.arc(this.DIM_X, this.DIM_Y, 10, 0, Math.PI*2);
    // ctx.rect(this.DIM_X, this.DIM_Y, 30, 30);
    ctx.drawImage(this.img, this.DIM_X, this.DIM_Y, 30, 30);
    ctx.fillStyle = "transparent";
    ctx.fill();
    ctx.closePath();
    this.DIM_Y += this.dy;

    if (this.DIM_Y <= 90) {
      this.dy = -1 * this.dy;
      // this.dy += 0.2;
    } else if (this.DIM_Y >= 270) {
      this.dy = 0;
    }
  }

  jump(ctx) {
    if (this.DIM_Y >= 270 || this.double > 1) {
      this.dy = -2;
      this.double -= 1;
      const music = new Audio("./assets/audio/jump.mp3");
      music.play();
    }

    if (this.DIM_Y >= 270) {
      this.double = 3;
    }
  }
}

module.exports = Player;
