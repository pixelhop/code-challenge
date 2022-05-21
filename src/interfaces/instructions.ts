import { Heading } from '../types/heading';
import { Move } from '../types/move';

export interface Instructions {
    x: number;
    y: number;
    heading: Heading;
    moves: Move[];
}
