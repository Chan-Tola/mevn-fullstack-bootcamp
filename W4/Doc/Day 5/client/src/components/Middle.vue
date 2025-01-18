<template>
  <section class="border-dashed text-white">
    <span
      class="flex justify-between text-center border-b-[1px] border-gray-600"
    >
      <p
        class="hover:bg-slate-600 transition duration-300 underline decoration-blue-500 underline-offset-[1rem] decoration-4 w-full p-4"
      >
        For you
      </p>
      <p
        class="hover:bg-slate-600 transition duration-300 hover:underline decoration-blue-500 underline-offset-[1rem] decoration-4 w-full p-4"
      >
        Following
      </p>
    </span>
    <!-- Middle Feed Section -->
    <div class="mt-6 p-6 rounded-lg space-y-6">
      <!-- Post 1 -->
      <div class="flex space-x-4 border-b border-gray-700 pb-4">
        <img
          src="https://i.pinimg.com/736x/70/d7/43/70d7439f09ccc3a539212e394e31fb90.jpg"
          alt="John's Profile"
          class="rounded-full h-12 w-12"
        />
        <div class="flex flex-col space-y-2 w-full">
          <div class="flex justify-between">
            <span class="font-bold">John Doe</span>
            <span class="text-sm text-gray-400">2m ago</span>
          </div>
          <p class="text-sm text-gray-300">
            This is a sample post in the feed!
          </p>
          <!-- User Post Image -->
          <div class="mt-4">
            <img
              src="https://i.pinimg.com/736x/70/d7/43/70d7439f09ccc3a539212e394e31fb90.jpg"
              alt="Post Image"
              class="w-full h-auto rounded-lg"
            />
          </div>
          <div class="flex space-x-6 mt-2">
            <button
              class="text-blue-500 hover:bg-blue-600 px-3 py-1 rounded-full"
            >
              Like
            </button>
            <button
              class="text-blue-500 hover:bg-blue-600 px-3 py-1 rounded-full"
            >
              Comment
            </button>
            <button
              class="text-blue-500 hover:bg-blue-600 px-3 py-1 rounded-full"
            >
              Share
            </button>
          </div>
        </div>
      </div>
      <!-- Post 2 -->
      <div class="flex space-x-4 border-b border-gray-700 pb-4">
        <img
          src="https://i.pinimg.com/736x/d2/8e/ff/d28effacdd60d7e13669bb5b6372afba.jpg"
          alt="Jane's Profile"
          class="rounded-full h-12 w-12"
        />
        <div class="flex flex-col space-y-2 w-full">
          <div class="flex justify-between">
            <span class="font-bold">Jane Smith</span>
            <span class="text-sm text-gray-400">10m ago</span>
          </div>
          <p class="text-sm text-gray-300">Another sample post in the feed!</p>
          <!-- User Post Image -->
          <div class="mt-4">
            <img
              src="https://i.pinimg.com/736x/d2/8e/ff/d28effacdd60d7e13669bb5b6372afba.jpg"
              alt="Post Image"
              class="w-full h-auto rounded-lg"
            />
          </div>
          <div class="flex space-x-6 mt-2">
            <button
              class="text-blue-500 hover:bg-blue-600 px-3 py-1 rounded-full"
            >
              Like
            </button>
            <button
              class="text-blue-500 hover:bg-blue-600 px-3 py-1 rounded-full"
            >
              Comment
            </button>
            <button
              class="text-blue-500 hover:bg-blue-600 px-3 py-1 rounded-full"
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
