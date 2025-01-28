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
    <section class="flex flex-1 flex-col h-full space-y-36 mt-4 relative">
      <button
        class="w-full bg-blue-500 rounded-full text-white font-semibold capitalize p-3 text-lg hover:bg-blue-600 transition duration-300"
      >
        Post
      </button>
      <button
        @click.prevent="handleShowLogout"
        class="w-full flex items-center relative gap-3 rounded-full text-white font-medium capitalize p-3 hover:bg-gray-700 transition duration-300"
      >
        <!-- logo -->
        <img
          src="https://i.pinimg.com/736x/1b/e0/08/1be008c3abf1282d28255c11de1de21b.jpg"
          class="h-10 w-10 rounded-full object-cover"
          alt="logo"
        />
        <!-- User Details -->
        <div class="flex flex-col text-left">
          <!-- Display Name -->
          <span class="font-bold text-base leading-tight">{{ user.name }}</span>
          <!-- Username -->
          <p class="text-sm text-gray-400">{{ user.username }}</p>
        </div>
      </button>
      <button
        v-if="isLogout"
        @click.prevent="handleLogout"
        class="text-white -top-10 rounded-xl w-full py-4 left-0 text-start absolute border"
      >
        <div
          class="w-full h-1/2 font-bold hover:bg-gray-300 hover:text-black p-4 transition duration-300"
        >
          Log Out {{ user.username }}
        </div>
      </button>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import logo from "../assets/logo-removebg-preview.png";
import { useRouter } from "vue-router";
import { useUserStore } from "../Store/User";
const route = useRouter();
const UserStore = useUserStore();
defineProps({
  user: {
    type: Object,
    required: true,
  },
});
const isLogout = ref(false);
const handleShowLogout = () => {
  isLogout.value = !isLogout.value;
  console.log(isLogout.value);
};
const handleLogout = () => {
  const checking = UserStore.logOut();
  if (checking) {
    console.log("still  have value");
  } else {
    route.push("/");
  }
};
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
