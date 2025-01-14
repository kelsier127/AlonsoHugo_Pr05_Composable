<template>
  <p> {{ posts.userId }} </p>
  <h1 class="text-3xl"> {{ posts.title }} </h1>
  <p class="text-lg"> {{ posts.body }} </p>
  <p class="text-right"> BY: {{ users }} </p>
</template>

<script setup>
import fetchApi from "../composable/llegirPosts.js";
import fetchUsersApi from "../composable/llegirUsuari.js";
import { watch } from "vue";

import { useRoute } from "vue-router";

const route = useRoute();

const id = route.params.id;

const { posts, leerPosts } = fetchApi(id);


leerPosts();

watch(() => posts, (newPosts) => {
  if (newPosts && newPosts.userId) {
    const { users, leerUsers } = fetchUsersApi(posts.userId);
    leerUsers();
    console.log(users);
  }
});


/*const { users, leerUsers } = fetchUsersApi(posts.userId);
leerUsers();*/
</script>
