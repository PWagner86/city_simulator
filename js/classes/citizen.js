import { randNum } from "../utils/math.js";

export default class Citizen {
    constructor() {
        this.genders = this.#setRandomGender();
        this.age = randNum(100);
        this.job = 'none';
    }

    #setRandomGender() {
        const genders = ['male', 'female']
        return genders[randNum(genders.length)];
    }
}