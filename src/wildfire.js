class Wildfire extends Component {
  constructor(gameScreen) {
        super(gameScreen)

        this.width = 50;
        this.height = 50;
        this.left = Math.floor(Math.random() * 800);
        this.top = Math.floor(Math.random() * (550- 160 + 1) + 160);
        this.element = document.createElement("img");
        this.element.setAttribute("src", "../images/wildfire.png");
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        this.gameScreen.appendChild(this.element);
  }
  
  placeBonus () {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  };

  removeBonus () {
      this.element.remove();
      game.boni.splice(0,1)
  }
  
}

