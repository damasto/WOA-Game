window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  const game = new Game();
  const possibleKeys = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"];

  startButton.addEventListener("click", () => {
    game.start();
  });

  restartButton.addEventListener("click", () => {
    window.location.reload();
  });

  function handleKeyDown(event) {
    const key = event.key;

    if (possibleKeys.includes(key)) {
      console.log(key);
      event.preventDefault();

      switch (key) {
        case "ArrowLeft":
          game.character.directionX = -3;
          game.character.element.style.transform = "scaleX(-1)"
          console.log("GOW", game.gameScreen.offsetWidth);
          console.log("left", game.character.left)
          break;
        case "ArrowUp":
          game.character.directionY = -3;
          console.log("GOW", game.gameScreen.offsetHeight);
          console.log("top", game.character.top);
          break;
        case "ArrowRight":
          game.character.directionX = 3;
          game.character.element.style.transform = "scaleX(1)";
          console.log("GOW", game.gameScreen.offsetWidth);
          console.log("left", game.character.left);
          break;
        case "ArrowDown":
          game.character.directionY = 3;
          console.log("GOW", game.gameScreen.offsetHeight);
          console.log("top", game.character.top);
          break;
      }
    }
  }

  function handleKeyUp(event) {

    const key = event.key;

    if (possibleKeys.includes(key)) {
      console.log(key);
      event.preventDefault();

      switch (key) {
        case "ArrowLeft":
          game.character.directionX = 0;
          break;
        case "ArrowUp":
          game.character.directionY = 0;
          break;
        case "ArrowRight":
          game.character.directionX = 0;
          break;
        case "ArrowDown":
          game.character.directionY = 0;
          break;
      }
    }
  }

  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);
};
