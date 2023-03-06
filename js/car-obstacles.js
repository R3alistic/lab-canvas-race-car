class Car {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        const images = new Image();
        images.src = "/images/car.png";
        images.onload = () => {
            this.images = images;
            this.draw();
        }
    }
    draw() {
        context.drawImage(this.images, this.x, this.y, 50, 100);
    }
    moveLeft() {
        if (this.x > 50){
        this.x -= 25;}
    }
    moveRight() {
        if (this.x < 400)
        this.x += 25;
    }
}

class Obstacle {
    constructor(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;
    }
    draw() {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}