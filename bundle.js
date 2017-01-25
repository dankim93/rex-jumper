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
	
	
	  const game = new Game(ctx);
	  document.addEventListener('keydown', e => {
	    game.handleJumpPress(e);
	    // game.handleStartPress(e);
	  });
	
	  game.start();
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const Cactus = __webpack_require__(2);
	const Player = __webpack_require__(3);
	const Bird = __webpack_require__(4);
	
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
	
	  draw(){
	    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
	    this.cactus.drawCactus(this.ctx);
	    this.player.drawRex(this.ctx);
	    this.bird.drawBird(this.ctx);
	    this.collision(this.player, this.cactus);
	    this.drawGround();
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
	    if (this.DIM_X === 0) {
	      this.dx = -1 * this.dx;
	    } else if (this.DIM_X === 580) {
	      this.dx = -1;
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
	
	    if (this.DIM_Y <= 210) {
	      // this.dy = -1 * this.dy;
	      this.dy += 0.2;
	    } else if (this.DIM_Y === 280) {
	      this.dy = 0;
	    }
	  }
	
	  jump(ctx) {
	    const music = new Audio("./assets/audio/jump.mp3");
	    music.play();
	
	    if (this.DIM_Y === 280) {
	      this.dy = -1.5;
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
	    // if (this.DIM_X === 0) {
	    //   this.dx = -1 * this.dx;
	    // } else if (this.DIM_X === 580) {
	    //   this.dx = -1;
	    // }
	  }
	}
	
	module.exports = Bird;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map