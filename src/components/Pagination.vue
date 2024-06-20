<template>
  <ul class="pagination">
    <li v-if="pages" v-for="page in pages">
      <router-link
        :to="{path: url, query: {
          page: page
        }}"
      >
        {{ page }}
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex'

const props = defineProps({
  limit: Number,
  url: String
})

const store = useStore()

const pages = computed(() => {
  let result = []
  const amount = Math.ceil(store.state.posts?.length / props.limit)
  for (let i = 1; i <= amount; i++) {
    result.push(i)
  }
  return result
})


</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  gap: 5px;
  position: absolute;
  bottom: 20px;
  flex-wrap: wrap;
}
</style>