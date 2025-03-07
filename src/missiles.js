class Missile {
  constructor(gameScreen, weight, imgPath, rotate) {
    this.gameScreen = gameScreen;
    this.left = Math.floor(Math.random() * 900);
    this.top = 0;
    this.width = 100;
    this.height = 50;
    this.weight = weight;
    this.element = document.createElement("img");
    this.element.setAttribute("src", imgPath);
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.rotate = rotate;

    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.top += this.weight;
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  toggleRotation() {
    this.element.classList.add(this.rotate);
  }

  increaseWeight(incrementor) {
    this.weight += incrementor
  }
}
