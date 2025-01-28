<template>
    <div>
      <h1>{{ message }}</h1>
      <button @click="changeMessage">Click Me</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Reactive state
  const message = ref('Hello, Vue 3!');
  
  // Function to update state
  const changeMessage = () => {
    message.value = 'You clicked the button!';
  };
  </script>
  
  <style scoped>
  h1 {
    color: blue;
  }
  
  button {
    padding: 10px 20px;
    background-color: #42b983;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: #2c8c65;
  }
  </style>
  