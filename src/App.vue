<script setup>
import { ref, onMounted } from 'vue';

let items = ref(null)

onMounted (async() => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  items.value = await data.json()
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
