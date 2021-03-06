const Game = require('./game');

document.addEventListener("DOMContentLoaded", function(){
  var canvas = document.getElementById("myCanvas");
  canvas.width = Game.DIM_X;
  canvas.height = Game.DIM_Y;
  var ctx = canvas.getContext("2d");

  // const music = new Audio("./assets/audio/beginning.mp3");
  // music.play();
  var audio = document.getElementById('beginning');
  document.getElementById('mute').addEventListener('click', e => {
      e = e || window.event;
      audio.muted = !audio.muted;
      e.preventDefault();
  }, false);


  const game = new Game(ctx);
  document.addEventListener('keydown', e => {
    game.handleJumpPress(e);
    game.handleStartPress(e);
  });

  // game.start();
});
