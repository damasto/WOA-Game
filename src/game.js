//creates the Game Screen
class Game {
  constructor() {
    //select respective elements
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.gameContainer = document.getElementById("game-container");
    this.statsContainer = document.getElementById("stats-container");
    this.scoreSpan = document.getElementById("score");
    this.livesSpan = document.getElementById("lives");
    this.catchedSpan = document.getElementById("catched");


    this.character = new Character(
      this.gameScreen,
      200,
      500,
      100,
      150,
      "./images/character.png"
    );
    this.height = 600;
    this.width = 1000;
    this.missiles = [];
    this.wildfire = null;
    this.wildfireIntervalId;
    this.catched = 0;
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000 / 60);
    this.music = new Audio();
    this.music.setAttribute("src", "./audio/gameAudio.mp3");
    this.music.volume = 0.4;
    this.music.loop = true;
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    this.startScreen.style.display = "none";
    this.gameContainer.style.display = "flex";
    this.gameScreen.style.display = "block";

    this.music.play();

    this.changeStatsDisplay();

    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
    //makes a wildfire appear every 10 seconds
    this.wildfireIntervalId = setInterval(() => {
      this.wildfire = new Wildfire(
        this.gameScreen,
        Math.floor(Math.random() * 800),
        Math.floor(Math.random() * (550 - 160 + 1) + 160),
        50,
        50,
        "./images/wildfire.png"
      );

      this.wildfire.removeBonus();
    }, 10000);
  }

  gameLoop() {
    //console.log("in the gameLoop")
    this.update();

    if (this.gameIsOver) {
      clearInterval(this.wildfireIntervalId);
      clearInterval(this.gameIntervalId);
    }
  }

  update() {
    this.character.move();

    if (this.wildfire && this.character.didCollide(this.wildfire)) {
      if (this.wildfire.element) {
        this.wildfire.element.remove();
        this.catched++;
        this.catchedSpan.innerHTML = `${this.catched} / 5`;
      }
    }

    if (this.catched === 1) {
      this.gameIsWon = true;
      this.endGame();
    }

    for (let i = 0; i < this.missiles.length; i++) {
      const missile = this.missiles[i];

      if (missile.element.src.includes("lechuga")) {
        missile.rotate = "rotate";
        missile.toggleRotation();
      }

      missile.move();

      if (this.character.didCollide(missile)) {
        missile.element.remove();
        this.lives--;
        this.livesSpan.innerHTML = this.lives;
        this.missiles.splice(i, 1);
        i--;
      } else if (missile.top >= this.height) {
        missile.element.remove();
        this.score += 5;
        this.scoreSpan.innerHTML = this.score;
        this.missiles.splice(i, 1);
        i--;
      }

      if (this.lives === 0) {
        this.endGame();
      }
    }

    const missileOptions = [
      {
        weight: 1,
        imgPath: "images/lechuga.png",
      },
      {
        weight: 2,
        imgPath: "images/tomatito.png",
      },
      {
        weight: 3,
        imgPath: "images/poop.png",
      },
    ];

    const randomOption = missileOptions[Math.floor(Math.random() * 3)];

    if (Math.random() > 0.98 && this.missiles.length < 10) {
      this.missiles.push(
        new Missile(
          this.gameScreen,
          Math.floor(Math.random() * 900),
          0,
          100,
          50,
          randomOption.weight,
          randomOption.imgPath
        )
      );
    }
  }

  changeStatsDisplay() {
    this.statsContainer.removeAttribute("id", "stats-container");
    this.statsContainer.setAttribute("id", "stats-in-game");
  }

  endGame() {
    this.character.element.remove();
    this.missiles.forEach((missile) => missile.element.remove());
    clearInterval(this.wildfireIntervalId);
    if (this.wildfire) {
      this.wildfire.element.remove();
    }

    this.gameIsOver = true;

    const endScreenResult = document.getElementById("game-result");
    const endPhrase = document.getElementById("end-phrase");
    const restartButton = document.getElementById("restart-button")

    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "flex";
    this.gameEndScreen.style.width = `${this.width}px`;
    this.gameEndScreen.style.height = `${this.height}px`;

    if(this.gameIsWon){
        endScreenResult.innerHTML = "You won!";
        endPhrase.innerHTML = "Press space for your revenge";
        restartButton.innerHTML = "Play again"
        window.addEventListener("keydown", (event) => {
            if(event.key === " ") {
                this.gameEndScreen.style.backgroundImage = "url(../images/septExpld.gif)";
                this.gameEndScreen.style.backgroundSize = "cover";
                endScreenResult.innerHTML = "";
                endPhrase.innerHTML = "";
            }
        })
    }

    this.scoreSpan.innerHTML = this.score;
    this.catchedSpan.innerHTML = `${this.catched} / 5`;

    this.music.pause();
    this.music.currentTime = 0;
  }

  playMusic() {
    this.music.addEventListener("ended", function () {
      return true;
    });
  }
}
