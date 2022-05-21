import { Direction } from './../types/direction';
import { Ship } from './ship';
import { describe, expect, it } from '@jest/globals';
import { Heading } from '../types/heading';

describe('Ship', () => {
    it('exists', () => {
        expect(Ship).toBeTruthy();
    });
    it('ship class tests', () => {
        // create a ship at 2,3 heading north
        const ship = new Ship(2, 3, 'N');
        expect(ship).toBeTruthy();
        expect(ship.x).toBe(2);
        expect(ship.y).toBe(3);
        expect(ship.heading).toBe('N');

        // check our ship can turn correctly
        const turnTests: [Direction, Heading][] = [
            ['R', 'E'],
            ['R', 'S'],
            ['R', 'W'],
            ['R', 'N'],
            ['L', 'W'],
            ['L', 'S'],
            ['L', 'E'],
            ['L', 'N'],
        ];
        turnTests.forEach((test) => {
            ship.turn(test[0]); // turn
            expect(ship.heading).toBe(test[1]);
        });
    });
});
