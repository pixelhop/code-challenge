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

    clone(): Ship {
        return new Ship(this.x, this.y, this.heading);
    }

    /* start chain'able methods */
    turn(direction: Direction): Ship {
        this.heading = angleToHeading(turnAngle(headingToAngle(this.heading), direction));
        return this;
    }

    forward(): Ship {
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
        return this;
    }

    lost() {
        this._lost = true;
        return this;
    }
    /* end chain'able methods */
}
