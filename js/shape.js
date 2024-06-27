class Shape {

    static rotate(array) {
        // clockwise rotation 90 degree
        const m = array.length;
        const n = array[0].length;
        // diagonal flip
        for (let i = 0; i < m; i++) {
            for (let j = i + 1; j < n; j++) {
                const temp = array[i][j];
                array[i][j] = array[j][i];
                array[j][i] = temp;
            }
        }
        // horizontal flip
        for (let i = 0; i < m; i++) {
            array[i].reverse();
        }
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
}