const Cactus = require("./cactus");
const Player = require("./player");
const Bird = require("./bird");

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.score = 0;
    this.player = new Player();
    this.cactus = new Cactus();
    this.bird = new Bird();
    this.init = setInterval(this.draw.bind(this), 3);
  }

  drawGround() {
    this.ctx.beginPath();
    this.ctx.moveTo(0, 300);
    this.ctx.lineTo(600, 300);
    this.ctx.stroke();

  }

  drawScore() {
    this.ctx.font = "16px Arial";

    this.ctx.fillText("Score: "+this.score, 8, 20);
  }

  draw(){
    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.cactus.drawCactus(this.ctx);
    this.player.drawRex(this.ctx);
    this.bird.drawBird(this.ctx);
    this.collision(this.player, this.cactus);
    this.drawGround();

    this.score += 1;
    this.drawScore();
  }

  handleJumpPress(e) {
    let code = e.keyCode;
    if (code === 32) {
      this.player.jump(this.ctx);
    }
  }

  // handleStartPress(e) {
  //   let code = e.keyCode;
  //   if (code === 13) {
  //     this.start();
  //   }
  // }

  collision(rect1, rect2) {
    if (rect1.DIM_X < rect2.DIM_X + 20 &&
        rect1.DIM_X + 20 > rect2.DIM_X &&
        rect1.DIM_Y < rect2.DIM_Y + 20 &&
        20 + rect1.DIM_Y > rect2.DIM_Y) {
          // clearInterval(this.start);
          clearInterval(this.init);
          const music = new Audio("./assets/audio/lose.mp3");
          music.play();

        }
  }

  start() {
    this.init;
  }
}

Game.DIM_X = 600;
Game.DIM_Y = 340;

module.exports = Game;
