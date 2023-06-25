<template>
  <div>
    <div class="mx-auto prose prose-indigo sm:rounded-md">
      <h2>Grid Size</h2>
      <p class="pb-4 text-xl leading-relaxed tracking-wide text-gray-700">
        Enter the top right (or north east) coordinates of the rectangular
        world. <br />Example: 5 3
      </p>
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-size"
      >
        Enter Coordinates
      </label>
      <input
        id="grid-size"
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        type="text"
        @input="handleInput($event)"
      />
      <p v-if="showErrorText" class="text-red-500 text-xs italic">
        Max coordinate value is 50
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store.ts';

// store
const store = useStore();

// data
let showErrorText = ref(false);

// methods
onMounted(() => {
  store.setButtonDisabled(true);
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLButtonElement;
	if (target) {
		showErrorText.value = false
		let gridSize = target.value.toString().trim().split(' ')
		if (gridSize.length === 2) {
			// TODO verify grid max value of 50
    	const isInvalid = gridSize.some((item: string) => +item > 50)
			if (isInvalid) {
				// TODO show error text
				showErrorText.value = true;
			} else {
				// TODO store values in store
				store.setGridSize(+gridSize[0], +gridSize[1])
				// TODO enable button to move to next step
				store.setButtonDisabled(false)
			}
		}
	}
};
</script>

<style scoped></style>
