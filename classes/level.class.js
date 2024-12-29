class Level {
    clouds ;
    enemies;
    backgroundObjects;
    level_end_x = 3680;

    constructor(enemies, clouds, backgroundObjects){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}