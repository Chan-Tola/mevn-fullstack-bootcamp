<template>
  <main class="text-white border-gray-700 border-r h-full px-7 flex flex-col">
    <!-- Logo Section -->
    <section
      class="hover:bg-gray-800 rounded-full w-[60px] h-[60px] flex justify-center items-center mb-4 cursor-pointer transition duration-300"
    >
      <img :src="logo" alt="logo" class="h-16 w-16" />
    </section>

    <!-- Navigation Section -->
    <section
      v-for="(item, outerIndex) in dataLists"
      :key="outerIndex"
      class="flex flex-col space-y-4"
    >
      <!-- Check if item.lists exists before rendering -->
      <div>
        <div
          v-for="(subItem, subIndex) in item.lists"
          :key="subIndex"
          class="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 cursor-pointer transition duration-300"
        >
          <i :class="`${subItem.icon} text-2xl`"></i>
          <span class="text-lg font-medium capitalize">{{ subItem.tag }}</span>
        </div>
      </div>
    </section>

    <!-- Action Buttons -->
    <section class="flex flex-1 flex-col h-full space-y-60 mt-auto">
      <button
        class="w-full bg-blue-500 rounded-full text-white font-semibold capitalize p-3 text-lg hover:bg-blue-600 transition duration-300"
      >
        Post
      </button>
      <button
        class="w-full bg-gray-800 rounded-full text-white font-medium capitalize p-3 text-lg hover:bg-gray-700 transition duration-300"
      >
        Account
      </button>
    </section>
  </main>
</template>

<script setup>
import logo from "../assets/logo-removebg-preview.png";
const dataLists = [
  {
    lists: [
      { icon: "bx bxs-home", tag: "home" },
      { icon: "bx bx-search", tag: "explore" },
      { icon: "bx bx-bell", tag: "notifcation" },
      { icon: "bx bx-envelope", tag: "messages" },
      { icon: "bx bx-align-left", tag: "list" },
      { icon: "bx bx-bookmark", tag: "bookmarks" },
      { icon: "bx bx-briefcase-alt-2", tag: "jobs" },
      { icon: "bx bx-user-plus", tag: "commmunities" },
      { icon: "bx bx-user", tag: "profile" },
      { icon: "bx bx-dots-horizontal-rounded", tag: "more" },
    ],
  },
];
</script>
