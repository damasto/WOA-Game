class Missile extends Component {
    constructor(gameScreen, left, top, width, height, weight, imgPath) {
        super(gameScreen, left, top, width, height, imgPath);
        this.weight = weight;
        this.element = document.createElement("img");
        this.element.setAttribute("src", imgPath);
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        this.rotate = "";

        this.gameScreen.appendChild(this.element);
  }

  move() {
    this.top += this.weight;
    this.updatePosition();
  }

  toggleRotation() {
    this.element.classList.add(this.rotate);
  }
    
}
