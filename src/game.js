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


        if (this.character.didCollide(missile)) {
          missile.element.remove();
          this.missiles.splice(i, 1);
          i--
        } else if (missile.top >= this.height) {
            missile.element.remove();
            this.score += 5;
            this.missiles.splice(i, 1);
            i--;
        }

       }


        if (Math.random() > 0.99) {
           this.missiles.push(this.createMissile())
        }

    }

    changeStatsDisplay () {
        this.statsContainer.removeAttribute("id", "stats-container")
        this.statsContainer.setAttribute("id", "stats-in-game")
    }

    createMissile() {

        const tomato = new Missile(this.gameScreen, "../images/tomatito.png");
        const lettuce = new Missile(this.gameScreen, "../images/lechuga.png");
        const poop = new Missile(this.gameScreen, "../images/poop.png");

        const missileOptions = [tomato, lettuce, poop];

        return missileOptions[Math.floor(Math.random() * missileOptions.length)];
    }

}