<script setup lang="ts">
// import Payment from './components/Payment.vue';
import Tweet from './components/Tweet.vue';
import Persons from './components/Persons.vue';
</script>

<template>
  <!-- yarn create vite -> vue -> typescript -->
  <!-- yarnでupdate -->
  <!-- yarn devで実行 -->
  <!-- <Payment /> -->
  <!-- <Tweet /> -->
  <Persons />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
