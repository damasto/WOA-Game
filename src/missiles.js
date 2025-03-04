class Missile {
    constructor (gameScreen, imgPath) {
        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random(0) * this.gameScreen.width);
        this.top = 0;
        this.width = 100;
        this.height = 50;
        this.element = document.createElement("img");
        this.element.setAttribute("src", imgPath);
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.top += 15;
        this.updatePosition();
    };

    updatePosition() {
        this.element.style.left = `${this.left}px`;;
        this.element.style.top = `${this.top}px`;;
    };

}