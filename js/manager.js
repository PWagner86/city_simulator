import { randMinMaxInt } from './utils/math.js';
import Building from './classes/building.js';

export default class Manager {
    constructor(ctx) {
        this.ctx = ctx;
        this.canvas = this.ctx.canvas;
        this.buildings = [];
        this.citizens = [];
        this.streets = [];
        this.#addEventListeners();
    }

    #addEventListeners() {
        this.canvas.addEventListener("click", e => this.addBuilding(e.offsetX, e.offsetY));
    }

    addBuilding(x, y) {
        const randWidth = randMinMaxInt(20, 100);
        const randHeight = randMinMaxInt(20, 100);
        const building = new Building(x, y, randWidth, randHeight);
        building.draw(this.ctx);
        this.buildings.push(building);
        console.log(this.buildings);
    }
}