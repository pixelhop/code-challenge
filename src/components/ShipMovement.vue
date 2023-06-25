<template>
  <div class="p-4">
    <div class="mx-auto prose prose-indigo sm:rounded-md">
      <h2>Ship Instruction</h2>
      <p class="pb-4 text-xl leading-relaxed tracking-wide text-gray-700">
        Enter the movement instructions for this ship. <br />Example: R F R F R
        F R F
      </p>
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="ship-movement"
      >
        Enter Movements
      </label>
      <input
        id="ship-movement"
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        type="text"
        @input="handleInput($event)"
      />
      <p v-if="showErrorText" class="text-red-500 text-xs italic">
        Max movements is 100.
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
    let shipMovements = target.value.toString().trim().split(' ');
    if (shipMovements.length > 100) {
      store.setButtonDisabled(false);
      showErrorText.value = true;
    } else {
      store.setButtonDisabled(false);
      showErrorText.value = false;
      store.setShipMovements(shipMovements);
    }
	}
};
</script>

<style scoped></style>
