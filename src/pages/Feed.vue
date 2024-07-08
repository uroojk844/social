<template>
  <main class="grid gap-2">
    <section class="flex items-center sticky top-0 bg-white py-4 sm:py-8 z-[9]">
      <button class="mr-4 md:hidden" @click="isNavOpened = !isNavOpened">
        <Icon icon="gravity-ui:bars-unaligned" class="text-xl" />
      </button>
      <div class="text-2xl font-bold">Feeds</div>

      <ul class="flex items-center gap-4 ml-auto text-gray-400">
        <li
          v-for="(filter, index) in filters"
          :key="index"
          class="cursor-pointer font-[500]"
          :class="{ 'text-black': filter == current }"
          @click="current = filter"
        >
          {{ filter }}
        </li>
      </ul>
    </section>

    <CreatePost />

    <section v-if="isLoading" class="grid place-items-center h-40">
      <Icon icon="svg-spinners:bars-rotate-fade" class="text-3xl" />
    </section>
    <section v-if="posts.length" class="grid gap-3 mb-8">
      <Post v-for="(post, index) in posts" :key="index" :post="post" />
    </section>
    <section
      class="grid place-items-center h-40"
      v-else-if="!isLoading && posts.length == 0"
    >
      <h1>Nothing to show!!</h1>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { onMounted, ref } from "vue";
import Post from "../components/Post.vue";
import CreatePost from "../components/CreatePost.vue";
import { isNavOpened } from "../store/NavStore";
import { posts } from "../store/post.store";
const current = ref("Recents");
const filters = ["Recents", "Friends", "Popular"];

import { getPosts } from "../store/post.store";
const isLoading = ref(true);

onMounted(async () => {
  getPosts().finally(() => (isLoading.value = false));
});
</script>
