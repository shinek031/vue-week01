<script setup>
import { ref } from 'vue'
const text = ref('莊明嘉')
</script>
<template>
  <h1>{{ text }}</h1>
  <input type="text" v-model="text" />
</template>
<style scoped>
</style>