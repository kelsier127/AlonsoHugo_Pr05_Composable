<template>
  <h1 class="text-3xl"> {{ posts.title }} </h1>
  <p class="text-left"> BY: {{ user }} </p>
  <br>
  <p class="text-lg"> {{ posts.body }} </p>
</template>

<script setup>
import { onMounted,ref } from "vue";
import fetchApi from "../composable/llegirPosts.js";
import { useRoute } from "vue-router";

const route = useRoute();

const id = route.params.id;

const { posts, leerPosts, retornarNombre } = fetchApi(id);

let user = ref('')

onMounted(async () => {
  await leerPosts();
  user.value = await retornarNombre(posts.value.userId);
  console.log(user.value);
});





</script>
