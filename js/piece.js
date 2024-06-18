class Piece {
    constructor() {
        this.size = 40;
        this.whiteSpace = 2;
    }

    static getShape(key) {
        let piece;
        switch (key) {
            case 'I':
                piece = [
                    [0, 0, 0, 0],
                    [1, 1, 1, 1],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                ];
                break;
            case 'O':
                piece = [
                    [1, 1],
                    [1, 1],
                ];
                break;
            case 'J':
                piece = [
                    [1, 0, 0],
                    [1, 1, 1],
                    [0, 0, 0],
                ];
                break;
            case 'L':
                piece = [
                    [0, 0, 1],
                    [1, 1, 1],
                    [0, 0, 0],
                ];
                break;
            case 'S':
                piece = [
                    [0, 1, 1],
                    [1, 1, 0],
                    [0, 0, 0],
                ];
                break;
            case 'Z':
                piece = [
                    [1, 1, 0],
                    [0, 1, 1],
                    [0, 0, 0],
                ];
                break;
            case 'T':
                piece = [
                    [1, 1, 1],
                    [0, 1, 0],
                    [0, 0, 0],
                ];
                break;
        }
        return piece
    }

    static getColor(key) {
        let color;
        switch (key) {
            case 'I':
                color = '#fcba03';
                break;
            case 'O':
                color = '#e83a5a';
                break;
            case 'J':
                color = '#3a60e8';
                break;
            case 'L':
                color = '#3a60e8';
                break;
            case 'S':
                color = '#3ae843';
                break;
            case 'Z':
                color = '#3ae843';
                break;
            case 'T':
                color = '#e83a7a';
                break;
        }
        return color
    }

    static rotate(array) {
        const m = array.length;
        const n = array[0].length;
        for (let i = 0; i < Math.floor(m / 2); i++) {
            for (let j = 0; j < n; j++) {
                let temp = array[i][j];
                array[i][j] = array[m-i-1][j];
                array[m-i-1][j] = temp;
            }
        }

        for (let i = 0; i < m; i++) {
            for (let j = i+1; j < n; j++){
                let temp = array[i][j];
                array[i][j] = array[j][i];
                array[j][i] = temp
            }
        }
        return array
    }
}