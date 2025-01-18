<template>
  <section class="w-full h-full">
    <section
      class="absolute bg-gray-100 bg-opacity-20 top-0 left-0 w-full h-full"
      style="backdrop-filter: blur(10px)"
    ></section>
    <section
      v-if="!isLoading"
      class="mx-auto rounded-xl shadow-lg text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[550px] px-6 py-8 sm:px-10 lg:px-12 bg-black"
      style="
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
          rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
          rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      "
    >
      <!-- Close Button -->
      <button
        @click="toggleLogin"
        class="absolute top-3 left-4 text-3xl text-gray-400 hover:text-red-600 transition-all"
      >
        &times;
      </button>

      <!-- Logo Section -->
      <div class="mx-auto flex flex-col justify-center items-center">
        <img :src="logo" alt="Logo" class="h-[90px]" />
      </div>
      <p class="text-white text-4xl font-bold py-2">Sign in to X</p>

      <!-- Form -->
      <form
        @submit.prevent="submitLogin"
        class="mx-auto mb-0 mt-4 max-w-md space-y-6"
      >
        <!-- Email Input -->
        <div>
          <label for="email" class="sr-only">Email</label>
          <div class="relative">
            <input
              v-model="email"
              type="email"
              class="w-full rounded-lg border-gray-700 bg-gray-800 p-4 pe-12 text-sm text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
            <span
              @click="clearInput"
              v-if="email"
              class="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 hover:text-red-600 cursor-pointer"
            >
              &times;
            </span>
          </div>
        </div>

        <!-- Password Input -->
        <div>
          <label for="password" class="sr-only">Password</label>
          <div class="relative">
            <input
              v-model="password"
              :type="passwordVisible ? 'text' : 'password'"
              class="w-full rounded-lg border-gray-700 bg-gray-800 p-4 pe-12 text-sm text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
            <span
              class="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 hover:text-blue-500 cursor-pointer"
            >
              <i
                @click="passwordVisible = !passwordVisible"
                :class="passwordVisible ? 'bx bxs-show' : 'bx bxs-hide'"
              ></i>
            </span>
          </div>
        </div>

        <!-- Footer Section -->
        <div class="flex items-center justify-between">
          <p class="text-sm text-gray-400">
            No account?
            <a class="text-blue-400 hover:underline" href="#">Sign up</a>
          </p>
          <button
            type="submit"
            class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white hover:bg-blue-600 transition-all"
          >
            Sign in
          </button>
        </div>
      </form>
    </section>
    <!-- Loading Spinner -->
    <div
      v-if="isLoading"
      class="flex justify-center absolute top-1/2 left-1/2 items-center mt-4"
    >
      <!-- <div
        class="spinner-border animate-spin inline-block w-10 h-10 border-4 border-blue-500 rounded-full"
      ></div> -->
      <div
        class="animate-spin spinner-border inline-block w-10 h-10 border-4 border-t-white border-blue-500 rounded-full"
      ></div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import logo from "../assets/logo-removebg-preview.png";
import { defineProps, defineEmits } from "vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useRouter } from "vue-router";
import { useUserStore } from "../Store/User";
// Access the  Store
const UserStore = useUserStore();
// loading
const isLoading = ref(false);
// router
const router = useRouter();
// props
const props = defineProps({
  isLoggedIn: Boolean,
});
// handler toggleLogin
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

// handler toat notify
const notify = (findUser) => {
  if (findUser) {
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

// handler submitLogin
const submitLogin = async () => {
  if (email.value && password.value) {
    isLoading.value = true; // Start loading
    try {
      const findUser = UserStore.Users.find(
        (i) => i.email === email.value && i.password === password.value
      );
      // Simulate an API call or validation
      await new Promise((resolve) =>
        setTimeout(resolve, 1000, notify(findUser))
      ); // Mock async operation
      clearInput();
      if (findUser) {
        await router.push("/home"); // Navigate to the home page

        console.log(findUser);
      } else {
        console.log("User not found!");
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      isLoading.value = false;
    }
  } else {
    notify();
  }
};
</script>
