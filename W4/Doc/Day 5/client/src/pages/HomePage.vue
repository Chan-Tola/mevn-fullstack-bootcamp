<template>
  <div>
    <router-view>
      <main class="w-full h-full bg-black">
        <section class="relative w-[1220px] m-auto mb-2 flex">
          <!-- Left Side -->
          <div class="fixed top-0 left-[19.5rem] h-full w-[330px]">
            <LeftSdie />
          </div>

          <!-- Middle Section -->
          <div class="flex-grow mx-[300px] h-full">
            <Middle />
          </div>

          <!-- Right Side -->
          <div class="fixed top-0 right-[19.5rem] h-full w-[330px]">
            <RightSide />
          </div>
        </section>
      </main>
    </router-view>
  </div>
</template>

<script setup>
import LeftSdie from "../components/LeftSdie.vue";
import Middle from "../components/Middle.vue";
import RightSide from "../components/RightSide.vue";
</script>
