<script setup>
import Calculator from "./main/Calculator.vue";
</script>

<template>
  <div>
    <h1>Vue 3 Calculator</h1>
    <Calculator />
  </div>
  <!-- <header></header> -->
  <!-- <main></main> -->
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: white;
}
@media (min-width: 1024px) {
}
</style>
