/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Game = __webpack_require__(1);
	
	document.addEventListener("DOMContentLoaded", function(){
	  var canvas = document.getElementById("myCanvas");
	  canvas.width = Game.DIM_X;
	  canvas.height = Game.DIM_Y;
	  var ctx = canvas.getContext("2d");
	
	  const music = new Audio("./assets/audio/beginning.mp3");
	  music.play();
	
	  const game = new Game(ctx);
	  document.addEventListener('keydown', e => {
	    game.handleJumpPress(e);
	    game.handleStartPress(e);
	  });
	
	  // game.start();
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const Cactus = __webpack_require__(2);
	const Player = __webpack_require__(3);
	const Bird = __webpack_require__(4);
	const Cloud = __webpack_require__(5);
	
	class Game {
	  constructor(ctx) {
	    this.ctx = ctx;
	    this.score = 0;
	    this.player = new Player();
	    this.cactus = new Cactus();
	    this.bird = new Bird();
	    this.cloud = new Cloud();
	    this.collided = false;
	    // this.init = setInterval(this.draw.bind(this), 3);
	    this.start();
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
	        this.cactus.DIM_Y = 280;
	        this.cactus.dx = -1;
	        this.player.DIM_X = 90;
	        this.player.DIM_Y = 280;
	        this.player.dy = -1.5;
	        this.bird.DIM_X = 600;
	        this.bird.DIM_Y = 240;
	        this.bird.dx = -0.5;
	        this.start();
	      } else {
	        this.player.dy = -1.5;
	        this.cactus.dx = -1;
	      }
	    }
	  }
	
	  collision(rect1, rect2, rect3) {
	    if (rect1.DIM_X < rect2.DIM_X + 20 &&
	        rect1.DIM_X + 20 > rect2.DIM_X &&
	        rect1.DIM_Y < rect2.DIM_Y + 20 &&
	        20 + rect1.DIM_Y > rect2.DIM_Y) {
	          // clearInterval(this.start);
	          clearInterval(this.init);
	          this.collided = true;
	          this.drawGameover();
	
	          const music = new Audio("./assets/audio/lose.mp3");
	          music.play();
	
	        } else if (rect1.DIM_X < rect3.DIM_X + 20 &&
	            rect1.DIM_X + 20 > rect3.DIM_X &&
	            rect1.DIM_Y < rect3.DIM_Y + 20 &&
	            20 + rect1.DIM_Y > rect3.DIM_Y) {
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


/***/ },
/* 2 */
/***/ function(module, exports) {

	class Cactus{
	  constructor() {
	    this.DIM_X = 600;
	    this.DIM_Y = 280;
	    this.dx = -1;
	    this.img = document.getElementById('cactus');
	  }
	  drawCactus(ctx) {
	    ctx.beginPath();
	    // ctx.arc(this.DIM_X, this.DIM_Y, 10, 0, Math.PI*2);
	    // ctx.rect(this.DIM_X, this.DIM_Y, 20, 20);
	    ctx.drawImage(this.img, this.DIM_X, this.DIM_Y, 20, 20);
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


/***/ },
/* 3 */
/***/ function(module, exports) {

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
	
	    if (this.DIM_Y <= 100) {
	      this.dy = -1 * this.dy;
	      // this.dy += 0.2;
	    } else if (this.DIM_Y >= 280) {
	      this.dy = 0;
	    }
	  }
	
	  jump(ctx) {
	    if (this.DIM_Y >= 280) {
	      this.dy = -2;
	      const music = new Audio("./assets/audio/jump.mp3");
	      music.play();
	    }
	  }
	}
	
	module.exports = Player;


/***/ },
/* 4 */
/***/ function(module, exports) {

	class Bird{
	  constructor() {
	    this.DIM_X = 600;
	    this.DIM_Y = 240;
	    this.dx = -0.5;
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
	    if (this.DIM_X === 0) {
	      this.DIM_X = 800;
	    }
	  }
	}
	
	module.exports = Bird;


/***/ },
/* 5 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map