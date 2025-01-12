<template>
  <form class="w-full gap-3 flex justify-center items-center text-black">
    <button
      class="w-full p-2 px-11 text-center bg-white rounded-full border flex items-center justify-center space-x-2"
    >
      <span>Sign up with Google</span>
      <i class="bx bxl-google text-2xl"></i>
    </button>
  </form>
  <form
    class="w-full flex justify-center items-start gap-3 flex-col text-black"
  >
    <button
      class="w-full p-2 px-11 bg-white text-md rounded-full border flex items-center justify-center space-x-2"
    >
      <i class="bx bxl-apple text-2xl"></i>
      <span>sign up with apple</span>
    </button>
  </form>
  <form
    class="w-full flex justify-center items-start gap-3 flex-col text-white"
  >
    <button class="p-2 w-full px-11 bg-blue-500 text-md rounded-full border">
      create account
    </button>
    <p>
      By signing up, you agree to the
      <a href="#" class="text-blue-700">Team of Service</a> and
      <a href="#" class="text-blue-700">Privacy Policy</a><br />
      including <a href="#" class="text-blue-700">Cookie User</a>
    </p>
  </form>
  <!-- Show InputForm if logged in -->
  <InputForm
    v-if="isLoggedIn"
    :isLoggedIn="isLoggedIn"
    @toggleLogin="checkLogin"
  />
  <form
    class="w-full flex justify-center items-start gap-3 flex-col text-blue-600 mt-[5rem]"
  >
    <h1 class="text-xl text-white">Already have an account ?</h1>
    <button
      :disabled="isLoggedIn"
      @click="isLoggedIn ? null : checkLogin()"
      class="p-2 w-full px-11 text-md rounded-full border hover:text-black hover:bg-white transition-all ease-in-out duration-150"
    >
      sign in
    </button>
  </form>
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

/* Dynamic @click Handler:
The @click handler dynamically evaluates whether isLoggedIn is true or false:
If isLoggedIn is true, the click event does nothing (null).
If isLoggedIn is false, it calls checkLogin to open the form.
Disable Button When Form Is Open:
The :disabled attribute disables the button when isLoggedIn is true. 
This provides a visual cue to the user that the button is not actionable while the form is open. */
</script>
