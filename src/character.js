class Character extends Component {
    constructor(gameScreen, left, top, width, height, imgPath) {
        super(gameScreen, left, top, width, height, imgPath);
        this.directionX = 0;
        this.directionY = 0;
        this.element.classList.add("character");
    }

    move () {

        if (this.left <= 0) {
            this.left = 0;
        };

        if (this.top <= 0) {
            this.top = 0;
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

    updatePosition() {
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`;
    }

    didCollide(missile) {
        const characterRect = this.element.getBoundingClientRect();
        const missileRect = missile.element.getBoundingClientRect();

        if (
            characterRect.left < missileRect.right && 
            characterRect.right > missileRect.left && 
            characterRect.top < missileRect.bottom && 
            characterRect.bottom > missileRect.top
        ) {
            return true
        } else {
            return;
        }
    }
}