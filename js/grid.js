class Grid {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        
        this.cells = new Array(rows);
        for (let row = 0; row < this.rows; row++) {
            this.cells[row] = new Array(cols);
            for (let col = 0; col < this.cols; col++) {
                this.cells[row][col] = 0;
            }
        }
    }
}