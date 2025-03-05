class Missile {
    constructor (gameScreen, imgPath) {
        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random() * 900);
        this.top = 0;
        this.width = 100;
        this.height = 50;
        this.element = document.createElement("img");
        this.element.setAttribute("src", imgPath);
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.styl