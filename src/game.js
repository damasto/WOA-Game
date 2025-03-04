class Game {
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.gameEndScreen = document.getElementById("game-end");
        this.gameContainer = document.getElementById("game-container");
        this.statsContainer = document.getElementById("stats-container")
        this.character = new Character(this.gameScreen, 200, 500, 100, 150, "./images/character.png")
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
            this.gameLoop();
        }, this.gameLoopFrequency);
    };

    gameLoop () {
        //console.log("in the gameLoop")
        this.update();

        if (this.gameIsOver) {
            clearInterval(this.gameIntervalId)
        }
    }

    update () {
        //console.log("in the update")
        this.character.move();

       // const randomNr = Math.random()
       // console.log(randomNr)

       for (let i = 0; i < this.missiles.length; i++) {
        const missile = this.missiles[i];
        missile.move();
       }

       if(this.character.didCollide(missile)) {
        this.missile.element.remove()
       }

        if (Math.random() > 0.2 && this.missiles.length === 0) {
           this.missiles.push(new Missile (this.gameScreen, "../images/tomatito.png"))
        }

    }

    changeStatsDisplay () {
        this.statsContainer.removeAttribute("id", "stats-container")
        this.statsContainer.setAttribute("id", "stats-in-game")
    }

}