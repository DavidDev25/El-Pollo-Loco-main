class smallChicken extends MoveableObject{
    height = 40;
    y = 390;
    width = 30;
    
    IMAGES_WALKING_SMALL_CHICKEN = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
    ];

    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING_SMALL_CHICKEN);
        this.x = 460 + Math.random() * 500;
        this.speed = 0.13 + Math.random() * 0.25;
        this.animate();
    }

    animate(){
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60); 

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING_SMALL_CHICKEN);
        }, 180);
    }
}