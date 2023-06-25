<template>
  <div class="p-4">
    <div class="mx-auto prose prose-indigo sm:rounded-md">
      <h2>Game Output</h2>
      <p class="pb-4 text-xl leading-relaxed tracking-wide text-gray-700">
        {{ gameOutput }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store.ts';

// store
const store = useStore();

// data
let gameOutput = ref('');
const orientations = ['N', 'E', 'S', 'W'];
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let lost = ref(false);
let index;
let newX;
let newY;

// mounted
onMounted(() => {
	store.setButtonDisabled(false);
  store.shipMovements.forEach((direction) => {
    if (direction.toUpperCase() === 'L') {
      index = orientations.indexOf(store.currentOrientation.toUpperCase());
      store.setShipOrientation(orientations[(index + 3) % 4]);
    } else if (direction.toUpperCase() === 'R') {
      index = orientations.indexOf(store.currentOrientation.toUpperCase());
      store.setShipOrientation(orientations[(index + 1) % 4]);
    } else if (direction.toUpperCase() === 'F') {
      newX =
        store.currentX +
        dx[orientations.indexOf(store.currentOrientation.toUpperCase())];
      newY =
        store.currentY +
        dy[orientations.indexOf(store.currentOrientation.toUpperCase())];
      store.setShipGrid(newX, newY);
      if (!isWithinGrid(newX, newY)) {
        lost.value = true;
      }
    }
  });
  gameOutput.value = `${store.currentX} ${store.currentY} ${
    store.currentOrientation
  } ${lost.value ? 'LOST' : ''}`;
});

// methods
const isWithinGrid = (curX: number, curY: number) => {
  return curX >= 0 && curY >= 0 && curX <= store.gridX && curY <= store.gridY;
};
</script>

<style scoped></style>
