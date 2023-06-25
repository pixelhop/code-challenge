<script setup lang="ts">
import Dialog from '@/components/DialogComponent.vue';
import GridSize from '@/components/GridSize.vue';
import ShipInfo from '@/components/ShipInfo.vue';
import ShipMovement from '@/components/ShipMovement.vue';
import GameOutput from '@/components/GameOutput.vue';

import { useStore } from '@/store.ts';
import { storeToRefs } from 'pinia';

// useRoute, useHead, and HelloWorld are automatically imported. See vite.config.ts for details.
const route = useRoute();

useHead({
  title: route.meta.title,
  meta: [
    {
      property: 'og:title',
      content: route.meta.title,
    },
    {
      name: 'twitter:title',
      content: route.meta.title,
    },
  ],
});

// store
const store = useStore();
const { currentStep } = storeToRefs(store);
const { isDisabled } = storeToRefs(store);

// data
const isOpen = ref(false);

// methods
const nextStep = () => {
  if (currentStep.value !== 4) {
    // increment step value
    store.nextStep();
  } else {
    isOpen.value = false;
  }
};
</script>
import FooterComponent from '@/components/FooterComponent.vue'

<template>
  <div class="relative py-8 homepage">
    <div
      class="absolute inset-0 w-full h-full pattern-boxes pattern-blue-500 pattern-bg-transparent pattern-opacity-20 pattern-size-16"
    ></div>
    <div
      class="container relative max-w-2xl mx-auto bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5"
    >
      <main>
        <div class="p-4 mx-auto prose md:px-6 prose-indigo sm:rounded-md">
          <h1>Ocean Grid Navigator</h1>
          <p class="pb-4 text-xl leading-relaxed tracking-wide text-gray-700">
            In this grid-based simulation game, players control ships on the
            ocean's surface, issuing instructions to determine the ships' final
            positions while taking into account boundaries and warning markers
            from previously lost ships.
          </p>
          <!-- DELETE BElOw -->
          <p>TODO ITEMS</p>
          <ul>
            <li>add dialog</li>
            <li>set current step in Pinia</li>
            <li>have the following steps for the flow of game play</li>
            <ol>
              <li>Get grid size</li>
              <li>Get Ship info</li>
              <li>Get Ship's movements</li>
              <li>Get Output</li>
              <li>Play again or quit game</li>
            </ol>
          </ul>
          <!-- DELETE ABOVE -->
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <button
              type="button"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              @click="isOpen = true"
            >
              Get started
            </button>
            <router-link to="/instructions">
              <button class="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </button>
            </router-link>
          </div>
        </div>
      </main>
      <FooterComponent></FooterComponent>

      <!-- Use Dialog Component -->
      <Dialog :open="isOpen" @close="isOpen = false">
        <!-- Dialog Header -->
        <template #header>
          <h2 class="font-bold text-lg text-center">Play Game</h2>
        </template>

        <!-- Dialog Content -->
        <template #content>
          <GridSize v-if="currentStep === 1"></GridSize>
          <ShipInfo v-if="currentStep === 2"></ShipInfo>
          <ShipMovement v-if="currentStep === 3"></ShipMovement>
          <GameOutput v-if="currentStep === 4"></GameOutput>
        </template>

        <!-- Dialog Footer -->
        <template #footer>
          <div class="text-center space-x-4">
            <button
              class="button text-center transition-all duration-200 cursor-pointer rounded-full text-white bg-purple-500 hover:bg-purple-600 focus:bg-purple-600 px-6 py-2.5"
              :class="{ 'opacity-25 cursor-not-allowed': isDisabled }"
              :disabled="isDisabled"
              @click="nextStep()"
            >
              Close
            </button>
          </div>
        </template>
      </Dialog>
    </div>
  </div>
</template>

<style>
.homepage {
  height: 100vh;
}
</style>
