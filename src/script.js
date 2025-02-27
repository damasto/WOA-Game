window.onload = function () {
  const startButton = document.getElementById("start-button");

  const game = new Game();

  startButton.addEventListener("click",  () => {
    game.start();
  });

};
