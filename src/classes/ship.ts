import { angleToHeading, headingToAngle } from '../constants/convert';
import { turnAngle } from '../constants/convert';
import { Direction } from '../types/direction';
import { Heading } from '../types/heading';

export class Ship {
    x: number;
    y: number;
    heading: Heading;
    private _lost = false;

    constructor(x: number, y: number, heading: Heading) {
        this.heading = heading;
        this.x = x;
        this.y = y;
    }

    get isLost(): boolean {
        return this._lost;
    }

    turn(direction: Direction): void {
        this.heading = angleToHeading(turnAngle(headingToAngle(this.heading), direction));
    }

    forward(): void {
        // next, adjust based on our heading
        if (this.heading === 'N') {
            this.x += 0;
            this.y += 1;
        } else if (this.heading === 'E') {
            this.x += 1;
            this.y += 0;
        } else if (this.heading === 'S') {
            this.x += 0;
            this.y += -1;
        } else if (this.heading === 'W') {
            this.x += -1;
            this.y += 0;
        }
    }

    lost() {
        this._lost = true;
    }
}
