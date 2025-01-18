<template>
  <div class="hidden lg:block h-full border-l text-white border-gray-600">
    <div class="p-4">
      <h2 class="text-xl font-semibold  mb-4">Trending Topics</h2>
      <div class="space-y-4">
        <div class="bg-gray-100 p-3 rounded-lg">
          <p class="text-sm font-medium text-gray-700">#VueJS</p>
          <p class="text-xs text-gray-500">2,348 Tweets</p>
        </div>
        <div class="bg-gray-100 p-3 rounded-lg">
          <p class="text-sm font-medium text-gray-700">#TailwindCSS</p>
          <p class="text-xs text-gray-500">1,879 Tweets</p>
        </div>
        <div class="bg-gray-100 p-3 rounded-lg">
          <p class="text-sm font-medium text-gray-700">#CodingLife</p>
          <p class="text-xs text-gray-500">1,102 Tweets</p>
        </div>
      </div>
      <div class="mt-6">
        <button
          class="w-full py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          Follow All
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>
