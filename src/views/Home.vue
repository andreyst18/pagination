<template>
  <div class="home">
    <ul class="home__list" v-if="posts">
      <li v-for="post in onePagePosts">
        <Post 
          :post="post"
        />
      </li>
    </ul>
    <Pagination 
      :limit="limit"
      :url="route.path"
    />
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

import Post from '../components/Post.vue'
import Pagination from '../components/Pagination.vue'

import { limit } from '../config'

const store = useStore()

const router = useRouter()
const route = useRoute()

onMounted(async() => {
  await store.dispatch('FETCH_POSTS')
})

const posts = computed(() => store.state.posts)

const currentPage = computed(() => route.query?.page || 1)

const onePagePosts = computed(() => {
  let start = (currentPage.value - 1) * limit;
  let end = start + limit;
  return posts.value.slice(start, end)
})

</script>

<style lang="scss" scoped>
.home {

  &__list {
    padding-left: 0;
  }
}
</style>