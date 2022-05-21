import { Heading } from '../types/heading';

export interface ControllerOutput {
    x: number;
    y: number;
    heading: Heading;
    lost?: boolean;
}
