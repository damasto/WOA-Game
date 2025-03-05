class Missile extends Component{
    constructor (gameScreen, width, height, imgPath) {
        super(gameScreen, width, height, imgPath);
        this.left = Math.floor(Math.random() * 900);
    }

    move() {
        this.top += 4;
        this.updatePosition();
    };

    updatePosition() {
        this.element.style.left = `${this.left}px`;;
        this.element.style.top = `${this.top}px`;;
    };

}