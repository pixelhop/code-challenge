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
  <div class="relative p-8 homepage">
    <div
      class="container relative max-w-2xl mx-auto bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5"
    >
      <main>
        <div class="p-4 mx-auto prose md:px-6 prose-indigo sm:rounded-md">
          <h1>Instructions</h1>
          <div>
            <h3>The Problem</h3>
            <p class="pb-4 text-xl leading-relaxed tracking-wide text-gray-700">
              The surface of the ocean can be modelled by a rectangular grid
              around which ships are able to move according to instructions
              provided from a control station. You are to write a program that
              determines each sequence of ship positions and reports the final
              position of the ship. A ship position consists of a grid
              coordinate (a pair of integers: x-coordinate followed by
              y-coordinate) and an orientation (N, S, E, W for north, south,
              east, and west). A ship instruction is a string of the letters
              "L", "R", and "F" which represent, respectively, the instructions:
            </p>
            <ul>
              <li>
                Left: the ship turns left 90 degrees and remains on the current
                grid point.
              </li>
              <li>
                Right: the ship turns right 90 degrees and remains on the
                current grid point.
              </li>
              <li>
                Forward: the ship moves forward one grid point in the direction
                of the current orientation and maintains the same orientation.
                The direction North corresponds to the direction from grid point
                (x, y) to grid point (x, y+1) and the direction east corresponds
                to the direction from grid point (x, y) to grid point (x+1, y).
              </li>
            </ul>
            <p class="pb-4 text-xl leading-relaxed tracking-wide text-gray-700">
              Since the grid is rectangular and bounded, a ship that falls off
              an edge of the grid is lost forever. However, lost ships leave a
              warning that prohibits future ships from dropping off the world
              from the same grid point. The warning is left at the last grid
              position the ship occupied before disappearing over the edge. An
              instruction to move "off" the world from a grid point from which a
              ship has been previously lost is simply ignored by the current
              ship.
            </p>
            <h3>The Input</h3>
            <p class="pb-4 text-xl leading-relaxed tracking-wide text-gray-700">
              The first line of input is the top right (or north east)
              coordinates of the rectangular world, the lower-left (or
              south-west) coordinates are assumed to be 0, 0. The remaining
              input consists of a sequence of ship positions and instructions
              (two lines per ship). A position consists of two integers
              specifying the initial coordinates of the ship and an orientation
              (N, S, E, W), all separated by whitespace on one line. A ship
              instruction is a string of the letters "L", "R", and "F" on one
              line. Each ship is processed sequentially, i.e. finishes executing
              the ship instructions before the next ship begins execution. The
              maximum value for any coordinate is 50. All instruction strings
              will be less than 100 characters in length.
            </p>
            <h3>The Output</h3>
            <p class="pb-4 text-xl leading-relaxed tracking-wide text-gray-700">
              For each ship position/instruction in the input, the output should
              indicate the final grid position and orientation of the ship. If a
              ship falls off the edge of the grid the word "LOST" should be
              printed after the position and orientation.
            </p>
            <h4>Sample Input</h4>
            <p class="pb-2 text-lg leading-relaxed tracking-wide text-gray-700">
              5 3<br />
              1 1 E<br />
              RFRFRFRF
            </p>
            <p class="pb-2 text-lg leading-relaxed tracking-wide text-gray-700">
              3 2 N<br />
              FRRFLLFFRRFLL<br />
            </p>

            <p class="pb-2 text-lg leading-relaxed tracking-wide text-gray-700">
              0 3 W<br />
              LLFFFLFLFL
            </p>

            <h4>Expected Output</h4>
            <p class="pb-2 text-lg leading-relaxed tracking-wide text-gray-700">
              1 1 E<br />
              3 3 N LOST<br />
              2 3 S
            </p>
          </div>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <router-link to="/">
              <button
                class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Play Game
              </button>
            </router-link>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<style>
.homepage {
  height: 100vh;
}
</style>
