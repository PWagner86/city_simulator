export default class Grid {
    constructor() {
        this.cols = 5;
        this.rows = 5;
        this.grid = new Array(this.cols);
        for(let i = 0; i < this.cols; i++) {
            this.grid[i] = new Array(this.rows)
        }
        for(let i = 0; i < this.cols; i++) {
            for(let j = 0; j < this.rows; j++) {
                this.grid[i][j] = new Cell();
            }
        }

        console.log(this.grid);
    }

    draw(ctx) {
        
    }

}

class Cell {
    constructor() {
        this.f = 0;
        this.g = 0;
        this.h = 0;
    }
}