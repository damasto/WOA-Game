class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.gameContainer = document.getElementById("game-container");
    this.statsContainer = document.getElementById("stats-container");
    this.scoreSpan = document.getElementById("score");
    this.livesSpan = document.getElementById("lives");
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
    this.boni = [];
    this.catched = 0;
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000 / 60);
    this.music = new Audio();
    this.music.setAttribute("src", "./audio/gameAudio.mp3");
    this.music.volume = 0;
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
  }

  gameLoop() {
    //console.log("in the gameLoop")
    this.update();

    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
    }
  }

  update() {

    //console.log("in the update")
    this.character.move();

    // const randomNr = Math.random()
    // console.log(randomNr)

    for (let i = 0; i < this.missiles.length; i++) {
        const missile = this.missiles[i];

        if (missile.element.src.includes("lechuga")) {
            missile.rotate  = "rotate"
            missile.toggleRotation();
        };

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

    for (let i = 0; i < this.boni.length; i++) {
        const bonus = this.boni[i];
        bonus.placeBonus()
    }

    const missileOptions = [
      {
        weight: 1,
        imgPath: "/images/lechuga.png",
      },
      {
        weight: 2,
        imgPath: "/images/tomatito.png",
      },
      {
        weight: 3,
        imgPath: "/images/poop.png",
      },
    ];

    const randomOption = missileOptions[Math.floor(Math.random() * 2)];

    if (Math.random() > 0.98 && this.missiles.length < 10) {
      this.missiles.push(
        new Missile(this.gameScreen, randomOption.weight, randomOption.imgPath)
      );
    }


    if (/*Math.floor(Math.random() * 900) > 898*/ Math.random() > 0.9 && this.boni.length === 0) {
        this.boni.push(
          new Wildfire(this.gameScreen)
        );

        console.log(this.boni)
    } 

    for (let i = 0; i < this.boni.length; i++) {
        const bonus = this.boni[i];
        bonus.placeBonus();
    }
  



  }


  

  changeStatsDisplay() {
    this.statsContainer.removeAttribute("id", "stats-container");
    this.statsContainer.setAttribute("id", "stats-in-game");
  }


  endGame() {
    this.character.element.remove();
    this.missiles.forEach((missile) => missile.element.remove());
    this.gameIsOver = true;

    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "flex";
    this.gameEndScreen.style.width = `${this.width}px`;
    this.gameEndScreen.style.height = `${this.height}px`;

    this.scoreSpan.innerHTML = this.score;

    this.music.pause();
    this.music.currentTime = 0;
  }

  playMusic() {
    this.music.addEventListener("ended", function () {
      return true;
    });
  }



  /*createMissile() {

        const missileOptions = [
            "../images/tomatito.png"),
            "../images/lechuga.png"),
            "../images/poop.png")
            ];

        
        return missileOptions[Math.floor(Math.random() * 2)];
    }*/
}
