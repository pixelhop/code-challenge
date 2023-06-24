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
        </div>
      </main>
      <footer class="py-6 text-sm text-center text-gray-700">
        <p>Created by Jennifer Bland</p>
        		<p>
			<a href="mailto:ratracegrad@gmail.com">
				<img
					alt="Email logo"
					class="inline mr-2"
					src="@/assets/email.svg"
					width="24"
					height="24"
				/>
			</a>
			<a href="https://www.jenniferbland.com/">
				<img
					alt="Website logo"
					class="inline mr-2"
					src="@/assets/website.svg"
					width="24"
					height="24"
				/>
			</a>
			<a href="https://github.com/ratracegrad">
				<img
					alt="GitHub logo"
					class="inline mr-2"
					src="@/assets/github.svg"
					width="24"
					height="24"
				/>
			</a>
			<a href="">
				<img
					alt="Twitter logo"
					class="inline mr-2"
					src="@/assets/twitter.svg"
					width="24"
					height="24"
				/>
			</a>
			<a href="https://www.linkedin.com/in/ratracegrad/">
				<img
					alt="Linkedin logo"
					class="inline"
					src="@/assets/linkedin.svg"
					width="24"
					height="24"
				/>
			</a>
		</p>
      </footer>
    </div>
  </div>
</template>

<style>
.homepage {
  height: 100vh;
}
</style>
