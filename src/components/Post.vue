<template>
  <div class="post">
    <div class="post__id">{{ post.id }}</div>
    <div class="post__title">{{ post.title }}</div>
    <div class="post__body">{{ post.body }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  post: Object
})
  
</script>

<style lang="scss" scoped>
.post {
  display: flex;
  width: auto;
      
  @media (max-width: 768px) {
    max-height: 80px;
  }
  
  div {
    border: 1px solid #b4b9c2;
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0 5px;
    overflow-y: hidden;
  }

  .post__id {
    min-width: 50px;
    display: flex;
    align-items: center;

    @media(max-width: 768px) {
      min-width: 30px;
    }
  }

  &__title {
    min-width: 200px;
    max-width: 200px;

    @media(max-width: 768px) {
      min-width: 100px;
      max-width: 100px;
    }
  }

  &__body {
    flex-grow: 1;
  }
}

</style>