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

   