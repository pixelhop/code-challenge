/**
 * area class
 */
export class Area {
    x1: number;
    x2: number;
    y1: number;
    y2: number;

    constructor(x2: number, y2: number, x1 = 0, y1 = 0) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    /** check to see if the specified coords are within bounds */
    inBounds(x: number, y: number): boolean {
        return x >= this.x1 && x <= this.x2 && y >= this.y1 && y <= this.y2;
    }
}
