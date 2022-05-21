import { Instructions } from './../interfaces/instructions';
import { ControllerOutput } from './../interfaces/controller-output';
import { ControllerConfig } from '../interfaces/controller-config';
import { Area } from './area';
import { Ship } from './ship';

/**
 * ship controller
 */
export class Controller {
    area: Area;
    instructions: Instructions[];
    ships: Ship[] = [];
    output: ControllerOutput[] = [];
    config: ControllerConfig;

    constructor(config: ControllerConfig) {
        this.area = new Area(config.x2, config.y2, config.x1, config.y1);
        this.instructions = config.instructions;
        this.config = config;
    }

    process(): Controller {
        // reset ships & output
        this.ships.length = 0;
        this.output.length = 0;

        for (let index = 0; index < this.instructions.length; index++) {
            const instruction = this.instructions[index];
            const ship = new Ship(instruction.x, instruction.y, instruction.heading);
            // console.log('new ship x:', ship.x, 'y:', ship.y, 'heading:', ship.heading);
            for (let moveIndex = 0; moveIndex < instruction.moves.length; moveIndex++) {
                const move = instruction.moves[moveIndex];
                if (move === 'L' || move === 'R') {
                    ship.turn(move);
                } else if (move === 'F') {
                    // check to see if an earlier ship got lost..
                    const skipMove = this.output.find(
                        (output) =>
                            output.lost &&
                            output.heading === ship.heading &&
                            output.x === ship.x &&
                            output.y === ship.y
                    );
                    if (!skipMove) {
                        // clone our ship, so we can move it forward, check it's bounds before committing to the move
                        const clone = ship.clone().forward();
                        // check to see if the ship is out of bounds
                        if (!this.area.inBounds(clone.x, clone.y)) {
                            // console.warn('ship lost');
                            // mark ship as lost
                            ship.lost();
                            break;
                        } else {
                            ship.forward();
                        }
                    } else {
                        // console.warn('blocked');
                    }
                }
            }
            // console.log('course:', JSON.stringify(ship.course));
            const output: ControllerOutput = {
                x: ship.x,
                y: ship.y,
                heading: ship.heading,
            };
            if (ship.isLost) {
                output.lost = true;
            }
            this.output.push(output);

            // keep track of all the ships for rendering
            this.ships.push(ship);
        }

        // console.log('output:', JSON.stringify(this.output, null, 4));
        return this;
    }
}
