<main>
    <div class="bg-dark text-secondary">
        <div class="py-5 p-4">
            <h1 class="display-5 fw-bold text-white">Pixelhop - Code Challenge</h1>
            <p><a href="https://github.com/pixelhop/code-challenge" target="_blank">https://github.com/pixelhop/code-challenge</a></p>
            <div class="col-lg-6">
                <h2>Input</h2>
                <div v-if="error" class="alert alert-danger d-flex align-items-center" role="alert">
                    <div>{{error}}</div>
                </div>
                <div class="mb-4">
                    <textarea class="form-control __monospace" :class="{'is-invalid': error}" v-model="input" rows="9"></textarea>
                </div>
                <div class="d-grid gap-2 d-sm-flex">
                    <button type="button" class="btn btn-success btn-lg px-4 me-sm-3 fw-bold" @click="$data.process()">Process</button>
                    <button type="button" class="btn btn-outline-warning btn-lg px-4" @click="$data.reset()">Reset</button>
                </div>
                <div class="mt-4" v-if="outputLines.length">
                    <h2>Output</h2>
                    <div class="__output-wrapper __monospace">
                        <div v-for="(line,index) in outputLines" v-html="line"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
