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
	  game.start();
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const Cactus = __webpack_require__(2);
	const Player = __webpack_require__(3);
	
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


/***/ },
/* 2 */
/***/ function(module, exports) {

	class Cactus{
	  constructor() {
	    this.DIM_X = 600;
	    this.DIM_Y = 290;
	  }
	  drawCactus(ctx) {
	    ctx.beginPath();
	    ctx.arc(this.DIM_X, this.DIM_Y, 10, 0, Math.PI*2);
	    ctx.fillStyle = "deepskyblue";
	    ctx.fill();
	    ctx.closePath();
	    this.DIM_X -= 1;
	  }
	
	}
	
	module.exports = Cactus;


/***/ },
/* 3 */
/***/ function(module, exports) {

	class Player {
	  constructor() {
	    this.DIM_X = 90;
	    this.DIM_Y = 290;
	  }
	
	  drawRex(ctx) {
	    ctx.beginPath();
	    ctx.arc(90, 290, 10, 0, Math.PI*2);
	    ctx.fillStyle = "black";
	    ctx.fill();
	    ctx.closePath();
	  }
	}
	
	module.exports = Player;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map