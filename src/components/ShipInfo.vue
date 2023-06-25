<template>
  <div class="p-4">
    <div class="mx-auto prose prose-indigo sm:rounded-md">
      <h2>Starting Ship Position</h2>
      <p class="pb-4 text-xl leading-relaxed tracking-wide text-gray-700">
        Enter the initial coordinates of the ship and an orientation (N, S, E,
        W).  <br />Example: 1 1 N
      </p>
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="ship-info"
      >
        Enter Starting Position
      </label>
      <input
        id="ship-info"
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        type="text"
        @input="handleInput($event)"
      />
      <p v-if="showErrorText" class="text-red-500 text-xs italic">
        Invalid Starting Position.
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
    showErrorText.value = false;
    let startPos = target.value.toString().trim().split(' ');
    if (startPos.length === 3) {
			showErrorText.value = false;
			store.setButtonDisabled(false);
			store.setStartPos(+startPos[0], +startPos[1], startPos[2]);
		} else {
			showErrorText.value = true;
			store.setButtonDisabled(true);
		}
	}
};
</script>

<style scoped>

</style>