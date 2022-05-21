import { ControllerConfig } from '../interfaces/controller-config';
import { Instructions } from '../interfaces/instructions';
import { Move } from '../types/move';

export const ruleProcessor = (input: string): ControllerConfig => {
    const lines = input.split(/\n+/); // split on multiple returns simplifies things somewhat
    if (lines.find((line) => line.length > 100)) {
        throw Error('instruction lines cannot be longer than 100 characters');
    }

    // first parse the ocean boundary
    const maxBounds: number[] = lines
        .shift()
        .split(' ')
        .map((v) => parseInt(v, 10));

    // next we loop down through remaining lines
    const instructions: Instructions[] = [];
    if (maxBounds.length === 2 && maxBounds[0] <= 50 && maxBounds[1] <= 50) {
        while (lines.length) {
            const shipStartData = lines.shift().split(' ');
            if (shipStartData.length === 3) {
                const x = parseInt(shipStartData[0], 10);
                const y = parseInt(shipStartData[1], 10);
                const heading = shipStartData[2];
                if (heading === 'N' || heading === 'S' || heading === 'E' || heading === 'W') {
                    const moves: Move[] = [];
                    lines
                        .shift()
                        .split('')
                        .forEach((move: string) => {
                            if (move === 'L' || move === 'R' || move === 'F') {
                                moves.push(move);
                            } else {
                                throw Error('invalid ship move');
                            }
                        });
                    if (moves.length) {
                        instructions.push({
                            x: x,
                            y: y,
                            heading: heading,
                            moves,
                        });
                    } else {
                        throw Error('no ship moves');
                    }
                } else {
                    throw Error('invalid ship orientation');
                }
            } else {
                throw Error('invalid ship start data');
            }
        } // end while
    } else {
        throw Error('invalid max bounds');
    }

    // finally build our instruction set
    return {
        x2: maxBounds[0],
        y2: maxBounds[1],
        instructions,
    };
};
