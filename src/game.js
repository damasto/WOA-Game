class Game {
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.gameEndScreen = document.getElementById("game-end");
        this.gameContainer = document.getElementById("game-container");
        this.statsContainer = document.getElementById("stats-container")
        this.player = null;
        this.height = 600;
        this.width = 1000;
        this.missiles = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
        this.gameIntervalId;
        this.gameLoopFrequency = Math.round(1000/60);
    }

    start () {
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;

        this.startScreen.style.display = "none";
        this.gameContainer.style.display = "flex";
        this.gameScreen.style.display = "block";

        this.changeStatsDisplay();
        

        this.gameIntervalId = setInterval(() => {
            this.gameLoopFrequency();
        }, 1000);
    };

    gameLoop () {
        this.update();

        if (this.gameIsOver) {
            clearInterval(this.gameIntervalId)
        }
    }

    update () {

    }

    changeStatsDisplay () {
        this.statsContainer.removeAttribute("id", "stats-container")
        this.statsContainer.setAttribute("id", "stats-in-game")
    }

}