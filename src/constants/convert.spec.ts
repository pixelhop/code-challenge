import { describe, expect, it } from '@jest/globals';
import { angleToHeading, headingToAngle, turnAngle } from './convert';

describe('angleToHeading', () => {
    it('exists', () => {
        expect(angleToHeading).toBeTruthy();
    });
    it('check behaviour', () => {
        expect(angleToHeading(0)).toBe('N');
        expect(angleToHeading(90)).toBe('E');
        expect(angleToHeading(180)).toBe('S');
        expect(angleToHeading(270)).toBe('W');
    });
});

describe('headingToAngle', () => {
    it('exists', () => {
        expect(headingToAngle).toBeTruthy();
    });
    it('check behaviour', () => {
        expect(headingToAngle('N')).toBe(0);
        expect(headingToAngle('E')).toBe(90);
        expect(headingToAngle('S')).toBe(180);
        expect(headingToAngle('W')).toBe(270);
    });
});

describe('turnAngle', () => {
    it('exists', () => {
        expect(turnAngle).toBeTruthy();
    });
    it('check behaviour', () => {
        expect(turnAngle(0, 'L')).toBe(270);
        expect(turnAngle(90, 'L')).toBe(0);
        expect(turnAngle(180, 'L')).toBe(90);
        expect(turnAngle(270, 'L')).toBe(180);
        expect(turnAngle(0, 'R')).toBe(90);
        expect(turnAngle(90, 'R')).toBe(180);
        expect(turnAngle(180, 'R')).toBe(270);
        expect(turnAngle(270, 'R')).toBe(0);
    });
});
