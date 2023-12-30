import { randMinMaxInt } from './utils/math.js';
import Building from './classes/building.js';
import Citizen from './classes/citizen.js';

export default class Manager {
    constructor(ctx) {
        this.ctx = ctx;
        this.canvas = this.ctx.canvas;
        this.buildings = [];
        this.citizenCount = 200;
        this.citizens = [];
        this.streets = [];
        this.#addEventListeners();
        this.setCitizens()
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

    setCitizens() {
        for(let i = 0; i < this.citizenCount; i++) {
            this.citizens.push(new Citizen());
        }
        console.log(this.citizens)
    }
}