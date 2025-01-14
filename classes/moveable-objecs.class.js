class MoveableObject extends DrawableObject{
  speed = 0.11;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  energy = 100;
  lastHit = 0;
  storeActualTime = new Date().getTime();

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    if(this instanceof ThrowableObject){
      return true;
    } else{
      return this.y < 155;
    }
  }
  
  isColliding(mo) {
    return (
      this.x + this.width > mo.x &&
      this.y + this.height > mo.y &&
      this.x < mo.x &&
      this.y < mo.y + mo.height
    );
  }

  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit; //Difference in ms
    timepassed = timepassed / 1000; // Difference in seconds

    return timepassed < 1;
  }

  getActualTime() {
    let actualTime = new Date().getTime();
    return actualTime;
  }

  storeTime() {
    let lastTime = new Date().getTime();
    this.storeActualTime = lastTime;
  }

  isDead() {
    return this.energy == 0;
  }
  
  moveLeft() {
    this.x -= this.speed;
    this.storeTime();
  }

  moveRight() {
    this.x += this.speed;
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  jump() {
    this.speedY = 30;
  }
}