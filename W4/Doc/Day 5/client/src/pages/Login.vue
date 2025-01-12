<template>
  <section class="w-full bg-gray-900 h-screen flex items-center justify-center">
    <figure>
      <img :src="logo" class="w-[50rem]" alt="logo" />
    </figure>
    <section class="flex flex-col items-center justify-center gap-8">
      <h1 class="text-white text-5xl text-center">Happening now</h1>
      <h1 class="text-white text-2xl text-center">Join today</h1>
      <SingIn />
    </section>
  </section>
</template>

<script setup>
import logo from "../assets/logo-removebg-preview.png";
import SingIn from "../components/SignIn.vue";
</script>
