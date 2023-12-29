import Building from './classes/building.js';

export default class Manager {
    constructor(ctx) {
        this.ctx = ctx;
        this.buildings = [];
        this.buildingCount = 10;
        this.citizens = [];
    }

    #setBuildings() {
        for(let i = 0; i < this.buildingCount; i++) {
            const randomX = Math.floor(Math.random() * this.ctx.canvas.width - 50);
            const randomY = Math.floor(Math.random() * this.ctx.canvas.height - 50);
            this.buildings.push(new Building(randomX, randomY));
        }
        console.log(this.buildings);
    }

    draw() {
        this.#setBuildings();
        this.buildings.forEach(building => building.draw(this.ctx));
    }

}