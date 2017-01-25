const Game = require('./game');

document.addEventListener("DOMContentLoaded", function(){
  var canvas = document.getElementById("myCanvas");
  canvas.width = Game.DIM_X;
  canvas.height = Game.DIM_Y;
  var ctx = canvas.getContext("2d");

  const game = new Game(ctx);
  document.addEventListener('keydown', e => {
    game.handleKeyPress(e);
  });
  game.start();
});
