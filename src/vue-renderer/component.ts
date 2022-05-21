import Vue from 'vue';
import { Controller } from '../classes/controller';
import renderTemplate from './template.vue';
import { ruleProcessor } from '../constants/rule-processor';
import { Area } from '../classes/area';
import { sampleInput } from '../constants/sample-input';

export class VueRenderer {
    vue: Vue;
    outputLines: string[] = [];
    input = sampleInput;
    error: string = null;
    private _interval: number;

    constructor() {
        this.vue = new Vue(
            renderTemplate({
                el: '#app',
                data: this,
            })
        );
    }

    process(): void {
        this.error = null;
        this.outputLines.length = 0;
        this.clearInterval();

        try {
            // process the rules
            const config = ruleProcessor(this.input);

            // trigger the controller
            const controller = new Controller(config);
            controller.process();

            // separating out all the render logic
            this._render(controller);
        } catch (error) {
            this.error = error;
            console.error(error);
        }
    }

    reset(): void {
        this.input = sampleInput;
        this.outputLines.length = 0;
        this.clearInterval();
    }

    clearInterval(): void {
        if (this._interval) {
            clearInterval(this._interval);
        }
    }

    private _render(controller: Controller): void {
        const lines: string[] = [];
        const area: Area = controller.area;
        lines.push('#> simulating ocean _');
        lines.push(
            `#> ocean boundary is <b>${area.x1}</b>, <b>${area.y1}</b> to <b>${area.x2}</b>, <b>${area.y2}</b>`
        );
        lines.push('#> initialising ships _');

        let shipIndex = 0;
        for (let index = 0; index < controller.config.instructions.length; index++) {
            const instruction = controller.config.instructions[index];
            lines.push(
                `#> ship ${shipIndex + 1} initialised at <b>${instruction.x}</b>, <b>${
                    instruction.y
                }</b> heading <b>${instruction.heading}</b>`
            );
            lines.push(`#> sending instruction set <b>${instruction.moves.join(' ')}</b>`);
            const ship = controller.ships[shipIndex];
            lines.push(
                `#> last known position: <b class='success'>${ship.x}</b>, <b class='success'>${ship.y}</b> heading <b class='success'>${ship.heading}</b>`
            );
            if (ship.isLost) {
                lines.push(`#> <b class='warning'>**LOST**</b>`);
            }
            shipIndex++;
        }
        lines.push(`#> <b class='success'>**COMPLETE**</b>`);

        // show one line at a time
        this._interval = window.setInterval(() => {
            this.outputLines.push(lines.shift());
            window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: 'smooth' });
            if (!lines.length) {
                this.clearInterval();
            }
        }, 500);
    }
}
