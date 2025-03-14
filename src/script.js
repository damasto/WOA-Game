window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;
  const possibleKeys = ["ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", " "];



  startButton.addEventListener("click", () => {
    startGame()
  });

  restartButton.addEventListener("click", () => {
    window.location.reload();
  });

  function startGame () {
    game = new Game();
    game.start()
  }

  function handleKeyDown(event) {
    const key = event.key;
    console.log(key)
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
        case " ":
        document.getElementById("game-end").style.backgroundImage = "url()"
      }
    }
  }

  function handleKeyUp(event) {

    const key = event.key;

    if (possibleKeys.includes(key)) {
      console.log(key);
      event.preventDefault();

      switch (key) {
   