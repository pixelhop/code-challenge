import { Instructions } from './instructions';

export interface ControllerConfig {
    x1?: number;
    y1?: number;
    x2: number;
    y2: number;
    instructions: Instructions[];
}
