const Cactus = require("./cactus");
const Player = require("./player");

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.score = 0;
    this.cactus = new Cactus();
    this.player = new Player();
  }

  drawGround() {
    this.ctx.beginPath();
    this.ctx.moveTo(0, 300);
    this.ctx.lineTo(600, 300);
    this.ctx.stroke();
  }

  draw(){
    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.cactus.drawCactus(this.ctx);
    this.player.drawRex(this.ctx);
    this.drawGround();
  }

  start() {
    setInterval(this.draw.bind(this), 10);
  }
}

Game.DIM_X = 600;
Game.DIM_Y = 340;

module.exports = Game;
