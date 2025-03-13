class Wildfire extends Component {
  constructor(gameScreen, left, top, width, height, imgPath, ) {
        super(gameScreen, left, top, width, height, imgPath);

        this.element = document.createElement("img");
        this.element.setAttribute("src", "/images/wildfire.png");
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        this.gameScreen.appendChild(this.element);
  }

  removeBonus () {
      setTimeout(() => {
        if(this.element) {
          this.element.remove();
        }
      }, 5000);
  }
  
}

