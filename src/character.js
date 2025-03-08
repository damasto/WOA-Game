class Character extends Component {
    constructor(gameScreen, left, top, width, height, imgPath) {
        super(gameScreen, left, top, width, height, imgPath);
        this.directionX = 0;
        this.directionY = 0;
        

        this.element = document.createElement("img");
        this.element.setAttribute("src", this.imgPath);
        this.element.classList.add("character");
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.gameScreen.appendChild(this.element);
    }

    move () {

        if (this.left <= 0) {
            this.left = 0;
        };
        //prevents character to walk up to the entire top
        if (this.top <= 250) {
            this.top = 250;
        };

        if (this.left > this.gameScreen.offsetWidth - this.width) {
            this.left = this.gameScreen.offsetWidth - this.width;
        };

        if (this.top > this.gameScreen.offsetHeight - this.height) {
          this.top = this.gameScreen.offsetHeight - this.height;
        }

        this.left += this.directionX;
        this.top += this.directionY;

        this.updatePosition()
    }

    didCollide(missile) {
        const characterRect = this.element.getBoundingClientRect();
        const missileRect = missile.element.getBoundingClientRect();

        if