class Cloud extends MoveableObject{
    y = 20;
    height = 250;
    width = 550;


    constructor(){
        super().loadImage('img/5_background/layers/4_clouds/1.png')
        this.x = Math.random() * 500;
        this.animate();
    }

    animate(){
        // this.moveLeft();
        setInterval(() => {
            this.x -=0.15;
        }, 1000/60)
    }
}