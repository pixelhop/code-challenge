import { Area } from './area';
import { describe, expect, it } from '@jest/globals';

describe('Area', () => {
    it('exists', () => {
        expect(Area).toBeTruthy();
    });
    it('ship class tests', () => {
        const area = new Area(2, 3);
        expect(area).toBeTruthy();
        expect(area.x1).toBe(0); // check defaults
        expect(area.y1).toBe(0); // ..
        expect(area.x2).toBe(2);
        expect(area.y2).toBe(3);
        expect(area.inBounds(2, 3)).toBe(true);
        expect(area.inBounds(0, 0)).toBe(true);
        expect(area.inBounds(-1, 0)).toBe(false);
        expect(area.inBounds(0, -1)).toBe(false);
        expect(area.inBounds(2, 4)).toBe(false);
        expect(area.inBounds(3, 3)).toBe(false);
    });
});
