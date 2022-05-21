import { sampleInput } from './../constants/sample-input';
import { ControllerConfig } from '../interfaces/controller-config';
import { Controller } from './controller';
import { describe, expect, it } from '@jest/globals';
import { ruleProcessor } from '../constants/rule-processor';

describe('Controller', () => {
    it('exists', () => {
        expect(Controller).toBeTruthy();
    });
    it('controller class tests', () => {
        const config: ControllerConfig = ruleProcessor(sampleInput);
        const controller = new Controller(config);
        expect(controller).toBeTruthy();
        expect(controller.process().output).toStrictEqual([
            { x: 1, y: 1, heading: 'E' },
            { x: 3, y: 3, heading: 'N', lost: true },
            { x: 2, y: 3, heading: 'S' },
        ]);
    });
});
