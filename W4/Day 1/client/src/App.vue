<template>
  <div id="app">
    <h1>Welcome to App</h1>
    <!-- Use the custom component -->
    <MyComponent />
  </div>
</template>

<script setup>
import MyComponent from './components/HelloWorld.vue'; // Import the component
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}
</style>
