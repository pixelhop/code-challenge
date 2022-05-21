import { describe, expect, it } from '@jest/globals';
import { ruleProcessor } from './rule-processor';
import { sampleInput } from './sample-input';

describe('ruleProcessor', () => {
    it('exists', () => {
        expect(ruleProcessor).toBeTruthy();
    });
    it('processes correctly', () => {
        expect(ruleProcessor(sampleInput)).toStrictEqual({
            x2: 5,
            y2: 3,
            instructions: [
                {
                    x: 1,
                    y: 1,
                    heading: 'E',
                    moves: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F'],
                },
                {
                    x: 3,
                    y: 2,
                    heading: 'N',
                    moves: ['F', 'R', 'R', 'F', 'L', 'L', 'F', 'F', 'R', 'R', 'F', 'L', 'L'],
                },
                {
                    x: 0,
                    y: 3,
                    heading: 'W',
                    moves: ['L', 'L', 'F', 'F', 'F', 'L', 'F', 'L', 'F', 'L'],
                },
            ],
        });
    });
});
