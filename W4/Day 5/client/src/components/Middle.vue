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
    <main class="flex justify-center items-center p-4">
      <!-- Post Section -->
      <div class="flex w-full max-w-lg shadow-lg rounded-lg p-4">
        <!-- Profile Picture -->
        <figure class="flex-shrink-0">
          <img
            src="https://i.pinimg.com/736x/70/d7/43/70d7439f09ccc3a539212e394e31fb90.jpg"
            alt="Profile Picture"
            class="rounded-full w-12 h-12"
          />
        </figure>

        <!-- Post Input Section -->
        <section class="flex flex-col w-full ml-4">
          <textarea
            placeholder="What's happening?"
            class="w-full text-lg bg-transparent outline-none resize-none py-2"
            rows="2"
          ></textarea>
          <div class="flex justify-between items-center mt-2">
            <!-- Additional Options (e.g., icons for adding media, emojis) -->
            <div class="flex space-x-4">
              <button class="text-blue-500 hover:text-blue-600">🖼️</button>
              <button class="text-blue-500 hover:text-blue-600">😊</button>
              <button class="text-blue-500 hover:text-blue-600">📍</button>
            </div>
            <!-- Post Button -->
            <button
              class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
            >
              Post
            </button>
          </div>
        </section>
      </div>
    </main>

    <!-- Middle Feed Section -->
    <section class="mt-6 p-6 rounded-lg space-y-6">
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
            {{ console.log(user.name) }}
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
import { useUserStore } from "../Store/User";

const UserStore = useUserStore();
defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>
