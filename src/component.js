class Component {
  constructor(gameScreen, left, top, width, height, imgPath) {
    this.gameScreen = gameScreen;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.imgPath = imgPath;
  }

  updatePosition() {
    this.