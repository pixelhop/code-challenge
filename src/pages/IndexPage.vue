<script setup lang="ts">
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
          <p>
            TODO ITEMS
          </p>
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
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <button
              type="button"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
    </div>
  </div>
</template>

<style>
.homepage {
  height: 100vh;
}
</style>
