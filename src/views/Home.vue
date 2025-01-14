<template>
  <div class="flex flex-wrap flex-grow">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
<script setup>
import PostCard from "../components/PostCard.vue";
import fetchApi from "../composable/llegirPosts.js";

defineProps({
  id:String
})

const { posts, leerPosts } = fetchApi();

leerPosts();

</script>
