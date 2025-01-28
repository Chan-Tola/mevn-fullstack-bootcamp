<template>
  <section class="w-full bg-black h-screen flex items-center justify-center">
    <!-- Left Section: Logo -->
    <figure class="flex-1 flex justify-center">
      <img :src="logo" class="w-[40rem] max-w-full object-contain" alt="Logo" />
    </figure>

    <!-- Right Section: Text and Sign-In Form -->
    <section
      class="flex-1 flex flex-col items-center justify-center gap-10 px-8"
    >
      <!-- Headings -->
      <div class="text-start">
        <h1 class="text-white text-6xl font-bold">Happening now</h1>
        <h2 class="text-white text-3xl font-medium mt-4">Join today.</h2>
      </div>

      <!-- Sign-In Component -->
      <div class="w-full max-w-sm">
        <SingIn />
      </div>
    </section>
  </section>
</template>

<script setup>
import logo from "../assets/logo-removebg-preview.png";
import SingIn from "../components/SignIn.vue";
</script>
