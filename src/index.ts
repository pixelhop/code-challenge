import { Controller } from './classes/controller';
import { ruleProcessor } from './constants/rule-processor';
import { sampleInput } from './constants/sample-input';

// process the rules
const config = ruleProcessor(sampleInput);

// trigger the controller
const controller = new Controller(config);
controller.process();

// check output
console.log(controller.output);

// ➜  pixelhop-code-challenge git:(develop) ✗ node dist/bundle.min.js
// [
//   { x: 1, y: 1, heading: 'E' },
//   { x: 3, y: 3, heading: 'N', lost: true },
//   { x: 2, y: 3, heading: 'S' }
// ]
