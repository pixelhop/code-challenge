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

          <p>
            The idea of this template is to bundle as many often used and useful
            features pre-configured as possible. If you don't need something,
            just remove it!
          </p>
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
