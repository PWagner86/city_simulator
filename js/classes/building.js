export default class Building {
    constructor(x, y, width = 10, length = 10) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.length = length;
    }

    draw(ctx, color = "black") {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.length);
    }
}