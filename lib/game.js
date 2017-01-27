const Cactus = require("./cactus");
const Player = require("./player");
const Bird = require("./bird");
const Cloud = require("./cloud");

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.score = 0;
    this.player = new Player();
    this.cactus = new Cactus();
    this.bird = new Bird();
    this.cloud = new Cloud();
    this.collided = false;
    this.first = true;
    this.drawStart();
  }

  drawGround() {
    this.ctx.beginPath();
    this.ctx.moveTo(0, 300);
    this.ctx.lineTo(600, 300);
    this.ctx.stroke();
  }

  drawScore() {
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "#000000";
    this.ctx.fillText("Score: "+this.score, 8, 20);
  }

  drawStart() {
    this.ctx.font = "20px Arial";
    this.ctx.fillText("Press 'Enter' to start", 210, 190);
  }

  drawGameover() {
    this.ctx.font = "50px Arial";
    this.ctx.fillText("Game Over", 180, 150);
    this.ctx.font = "15px Arial";
    this.ctx.fillText("Press 'Enter' to restart", 230, 190);
  }

  draw(){
    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.cactus.drawCactus(this.ctx);
    this.player.drawRex(this.ctx);
    this.bird.drawBird(this.ctx);
    this.cloud.drawCloud(this.ctx);
    this.collision(this.player, this.cactus, this.bird);
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

  //reset
  handleStartPress(e) {
    let code = e.keyCode;
    if (code === 13) {
      if (this.collided) {
        this.cactus.DIM_X = 600;
        this.cactus.DIM_Y = 270;
        this.cactus.dx = -1;
        this.player.DIM_X = 90;
        this.player.DIM_Y = 270;
        this.player.dy = -1.5;
        this.bird.DIM_X = 600;
        this.bird.DIM_Y = 220;
        this.bird.dx = -0.5;
        this.start();
      } else if (this.first){
        this.player.dy = -1.5;
        this.cactus.dx = -1;
        this.first = false;
        this.start();
      }
    }
  }

  collision(rect1, rect2, rect3) {
    if (rect1.DIM_X < rect2.DIM_X + 30 &&
        rect1.DIM_X + 30 > rect2.DIM_X &&
        rect1.DIM_Y < rect2.DIM_Y + 30 &&
        30 + rect1.DIM_Y > rect2.DIM_Y) {
          // clearInterval(this.start);
          clearInterval(this.init);
          this.collided = true;
          this.drawGameover();

        } else if (rect1.DIM_X < rect3.DIM_X + 20 &&
            rect1.DIM_X + 30 > rect3.DIM_X &&
            rect1.DIM_Y < rect3.DIM_Y + 20 &&
            30 + rect1.DIM_Y > rect3.DIM_Y) {
              clearInterval(this.init);
              this.collided = true;
              this.drawGameover();
        }
  }

  start() {
    this.score = 0;
    this.init = setInterval(this.draw.bind(this), 3);
  }
}

Game.DIM_X = 600;
Game.DIM_Y = 340;

module.exports = Game;
