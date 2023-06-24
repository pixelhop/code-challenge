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
    </div>
  </div>
</template>

<script setup lang="ts">
// methods
const handleInput = (event: Event) => {
  const target = event.target as HTMLButtonElement;
  console.log('target', target.value);
};
</script>

<style scoped></style>
