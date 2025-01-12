<template>
  <section
    class="mx-auto rounded-xl shadow-2xl text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] px-6 py-10 sm:px-8 lg:px-10 bg-gray-950"
    style="box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2)"
  >
    <div class="mx-auto flex flex-col justify-center items-center">
      <button
        @click="toggleLogin"
        class="absolute top-0 left-3 text-4xl text-white hover:text-red-700"
      >
        x
      </button>
      <img :src="logo" alt="logo" class="h-[100px]" />
    </div>
    <form
      @submit.prevent="submitLogin"
      class="mx-auto mb-0 mt-8 max-w-md space-y-4"
    >
      <div>
        <label for="email" class="sr-only">Email</label>

        <div class="relative">
          <input
            v-model="email"
            type="email"
            class="w-full rounded-lg border -gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="email"
          />
          <span
            @click="clearInput"
            v-if="email"
            class="absolute inset-y-0 end-0 grid place-content-center px-4"
          >
            X
          </span>
        </div>
      </div>

      <div>
        <label for="password" class="sr-only">Password</label>

        <div class="relative">
          <input
            v-model="password"
            :type="passwordVisible ? 'text' : 'password'"
            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="password"
          />

          <span
            class="absolute inset-y-0 end-0 grid place-content-center py-4 px-4 text-[23px]"
          >
            <label>
              <i
                @click="passwordVisible = !passwordVisible"
                :class="passwordVisible ? 'bx bxs-show' : 'bx bxs-hide'"
              ></i>
            </label>
          </span>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <p class="text-sm text-gray-500">
          No account?
          <a class="underline" href="#">Sign up</a>
        </p>

        <button
          type="submit"
          class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          Sign in
        </button>
      </div>
    </form>
  </section>
</template>
<script setup>
import { ref } from "vue";
import logo from "../assets/logo-removebg-preview.png";
import { defineProps, defineEmits } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const props = defineProps({
  isLoggedIn: Boolean,
});

const emit = defineEmits(["toggleLogin"]);

const toggleLogin = () => {
  emit("toggleLogin");
};

// value from the Input field
const email = ref("");
const password = ref("");

// create show password
const passwordVisible = ref(false);

// Function to handle form submission
const clearInput = () => {
  email.value = "";
  password.value = "";
};
const submitLogin = () => {
  // if we have data we need to check email and password
  if (email.value && password.value) {
    notify();
    clearInput();
  } else {
    notify();
  }
};

// toat notify
const notify = () => {
  if (email.value && password.value) {
    toast("success", {
      theme: "colored",
      type: "success",
      position: "top-center",
      hideProgressBar: true,
      dangerouslyHTMLString: true,
    });
  } else {
    toast("try again", {
      theme: "colored",
      type: "error",
      position: "top-center",
      hideProgressBar: true,
      dangerouslyHTMLString: true,
    });
  }
};
</script>

<style></style>
