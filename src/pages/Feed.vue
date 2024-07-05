<template>
  <main class="">
    <section class="flex items-center sticky top-0 bg-white py-4 sm:py-8 z-[9]">
      <button class="mr-4 md:hidden" @click="isNavOpened = !isNavOpened">
        <Icon icon="gravity-ui:bars-unaligned" class="text-xl" />
      </button>
      <div class="text-2xl font-bold">Feeds</div>

      <ul class="flex items-center gap-4 ml-auto text-gray-400">
        <li
          v-for="(filter, index) in filters"
          :key="index"
          class="cursor-pointer font-semibold"
          :class="{ 'text-black': filter == current }"
          @click="current = filter"
        >
          {{ filter }}
        </li>
      </ul>
    </section>

    <section class="grid gap-3 mb-8">
      <Post v-for="(post, index) in posts.slice(0,2)" :key="index" :post="post" />
      <CreatePost />
      <Post v-for="(post, index) in posts" :key="index" :post="post" />
    </section>
  </main>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import Post from "../components/Post.vue";
import CreatePost from "../components/CreatePost.vue";
import { isNavOpened } from "../store/NavStore";
import { posts } from "../store/post.store";
const current = ref("Recents");
const filters = ["Recents", "Friends", "Popular"];
</script>
