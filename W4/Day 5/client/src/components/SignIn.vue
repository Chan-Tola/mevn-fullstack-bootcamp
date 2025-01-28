<template>
  <section
    class="flex flex-col items-center w-full px-4 py-10 text-white space-y-8"
  >
    <!-- Sign up with Google -->
    <form class="w-full flex justify-center items-center text-black">
      <button
        class="w-full p-3 text-lg font-semibold bg-white rounded-full border border-gray-300 flex items-center justify-center space-x-3 hover:bg-gray-100 transition ease-in-out duration-200"
      >
        <span>Sign up with Google</span>
        <i class="bx bxl-google text-2xl"></i>
      </button>
    </form>

    <!-- Sign up with Apple -->
    <form class="w-full flex justify-center items-center text-black">
      <button
        class="w-full p-3 text-lg font-semibold bg-white rounded-full border border-gray-300 flex items-center justify-center space-x-3 hover:bg-gray-100 transition ease-in-out duration-200"
      >
        <i class="bx bxl-apple text-2xl"></i>
        <span>Sign up with Apple</span>
      </button>
    </form>

    <!-- Create Account -->
    <form class="w-full flex flex-col items-center text-white space-y-3">
      <button
        class="w-full p-3 text-lg font-semibold bg-blue-500 rounded-full border border-blue-600 hover:bg-blue-600 transition ease-in-out duration-200"
      >
        Create Account
      </button>
      <p class="text-sm text-gray-400 text-center">
        By signing up, you agree to the
        <a href="#" class="text-blue-400 hover:underline">Terms of Service</a>
        and
        <a href="#" class="text-blue-400 hover:underline">Privacy Policy</a>,
        including
        <a href="#" class="text-blue-400 hover:underline">Cookie Use</a>.
      </p>
    </form>

    <!-- Show InputForm if logged in -->
    <InputForm
      v-if="isLoggedIn"
      :isLoggedIn="isLoggedIn"
      @toggleLogin="checkLogin"
      class="w-full"
    />

    <!-- Already have an account -->
    <form
      class="w-full flex flex-col items-center text-blue-600 mt-10 space-y-3"
    >
      <h1 class="text-xl font-bold text-gray-300">Already have an account?</h1>
      <button
        :disabled="isLoggedIn"
        @click="isLoggedIn ? null : checkLogin()"
        class="w-full p-3 text-lg font-semibold bg-transparent border border-gray-400 rounded-full hover:text-white hover:bg-gray-700 transition-all ease-in-out duration-200"
      >
        Sign In
      </button>
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";
import InputForm from "./InputForm.vue"; // Import the InputForm component

// Reactive variable to manage InputForm visibility
const isLoggedIn = ref(false);

// Method to toggle login state
const checkLogin = () => {
  isLoggedIn.value = !isLoggedIn.value; // Toggle the state
  console.log("isLoggedIn:", isLoggedIn.value);
};
</script>
<!-- /* Dynamic @click Handler: The @click handler dynamically evaluates whether
isLoggedIn is true or false: If isLoggedIn is true, the click event does nothing
(null). If isLoggedIn is false, it calls checkLogin to open the form. Disable
Button When Form Is Open: The :disabled attribute disables the button when
isLoggedIn is true. This provides a visual cue to the user that the button is
not actionable while the form is open. */ -->
