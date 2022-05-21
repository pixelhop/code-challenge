import { Direction } from '../types/direction';
import { Heading } from '../types/heading';
import { headings } from './heading';

/** converts an angle into a heading */
export const angleToHeading = (angle: number): Heading => {
    const index = Math.round((angle - 45) / 90.0) & 3;
    return headings[index];
};

/** converts a heading into an angle */
export const headingToAngle = (heading: Heading) => {
    return headings.findIndex((value) => value === heading) * 90;
};

export const turnAngle = (angle: number, direction: Direction): number => {
    let newAngle = direction === 'L' ? angle - 90 : angle + 90;
    // wrap the angle
    if (newAngle >= 0) {
        const tempAngle = newAngle % 360;
        newAngle = tempAngle === 360 ? 0 : tempAngle;
    } else {
        newAngle = 360 - ((-1 * newAngle) % 360);
    }
    return newAngle;
};
