<template>
  <main class="grid gap-2">
    <section class="flex items-center sticky top-0 bg-white py-4 sm:py-8 z-[9]">
      <button class="mr-4 md:hidden" @click="isNavOpened = !isNavOpened">
        <Icon icon="gravity-ui:bars-unaligned" class="text-xl" />
      </button>
      <div class="text-2xl font-bold">Feeds</div>

      <ul class="flex items-center gap-4 ml-auto text-gray-400">
        <li v-for="(filter, index) in filters" :key="index" class="cursor-pointer font-[500]"
          :class="{ 'text-black': filter == current }" @click="current = filter">
          {{ filter }}
        </li>
      </ul>
    </section>

    <CreatePost />

    <section v-if="posts.isLoading.value" class="grid place-items-center h-40">
      <Icon icon="svg-spinners:bars-rotate-fade" class="text-3xl" />
    </section>
    <section v-if="posts.data.value" class="grid gap-3 mb-8">
      <Post v-for="post in posts.data.value" :key="post._id" :post="post" />
    </section>
    <section class="grid place-items-center h-40" v-else-if="!posts.isLoading && posts.data.value == 0">
      <h1>Nothing to show!!</h1>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import Post from "../components/Post.vue";
import CreatePost from "../components/CreatePost.vue";
import { isNavOpened } from "../store/NavStore";
const current = ref("Recents");
const filters = ["Recents", "Friends", "Popular"];

// convex
import { useConvexQuery } from "@convex-vue/core";
import { api } from "../../convex/_generated/api";
const posts = useConvexQuery(api.posts.get, {});
</script>
