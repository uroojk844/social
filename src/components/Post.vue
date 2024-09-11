<template>
  <section class="post p-6 rounded-2xl grid gap-4" :class="{
    lightyellow: $props.post.type == 'text',
    lightblue: $props.post.type == 'image',
    purple: $props.post.type == 'video',
  }">
    <div class="flex gap-2">
      <img class="size-8 rounded-full" :src="userData.data.value?.picture" />
      <div class="font-semibold">
        <div class="text-sm">{{ userData.data.value?.name }}</div>
        <div class="text-[10px] text-gray-400">
          {{ moment($props.post?._creationTime).fromNow() }}
        </div>
      </div>

      <section class="ml-auto relative">
        <div @click="menuToggle = !menuToggle" :name="$props.post._id"
          class="cursor-pointer border border-gray-400 size-8 centered rounded-full">
          <Icon icon="bi:three-dots-vertical" />
        </div>

        <div :class="{ hidden: !menuToggle }"
          class="menu absolute min-w-32 shadow rounded-xl overflow-hidden -left-4 -translate-x-full top-0 bg-white border">
          <div v-for="(option, index) in [
            {
              icon: 'solar:trash-bin-trash-bold',
              label: 'delete',
              action: () => postMutation.mutate({ id: post._id }),
            },
            {
              icon: 'ic:round-mode-edit',
              label: 'edit',
            },
            {
              icon: 'material-symbols:cancel',
              label: 'close',
              action: () => (menuToggle = !menuToggle),
            },
          ]" :key="index" @click="option?.action" x
            class="flex items-center gap-2 py-2 px-3 capitalize text-sm cursor-pointer hover:bg-gray-200 active:bg-black/15">
            <Icon :icon="option.icon" class="text-lg" />
            {{ option.label }}
          </div>
        </div>
      </section>
    </div>

    <div class="text-sm">
      {{ post.data?.text }}
    </div>

    <!-- Images -->
    <div v-if="$props.post?.type == 'image'" class="post-container">
      <div v-for="(_, index) in images < 4 ? images : 3" :key="index">
        <img :src="'http://picsum.photos/400/300.webp?' +
          Math.floor(Math.random() * 1000)
          " class="rounded-xl h-full object-cover w-full" />
      </div>

      <div v-if="images > 3" class="more relative rounded-xl overflow-hidden font-bold text-5xl w-full">
        <img src="http://picsum.photos/400/300.webp?4" class="rounded-xl h-full object-cover" />

        <div class="absolute cursor-pointer size-full top-0 centered backdrop-blur-sm text-white text-center">
          +{{ images - 3 }}
        </div>
      </div>
    </div>
    <!-- Videos -->
    <iframe v-if="post?.type == 'video'" class="aspect-video rounded-xl w-full"
      src="https://www.youtube.com/embed/PRwnRKVsBe8"
      title="Learn Vue 3 - Ep 22, Dependency Injection With Provide and Inject" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    <section class="flex gap-6">
      <IconButton icon="mdi:eye" :label="post.views || '0'" />
      <LikeButton :id="post._id" :is-liked="post.likes?.includes(user._id)" :label="post.likes?.length || 0" />
      <IconButton icon="majesticons:comment-2-text" label="comment" />
      <div class="hidden pink ml-auto text-white px-4 py-1.5 rounded-full cursor-pointer">
        🔥woow!!!
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";

import IconButton from "./IconButton.vue";
import LikeButton from "./LikeButton.vue";
import moment from "moment";
import { ref } from "vue";

import { useConvexMutation, useConvexQuery } from "@convex-vue/core";
import { api } from "../../convex/_generated/api";
import { user } from "../store/user.store";

const { post } = defineProps(["post"]);

const postMutation = useConvexMutation(api.posts.deletePost);
const userData = useConvexQuery(api.users.getUser, { id: post.userID });

const menuToggle = ref(false);
const images = 7;
</script>

<style scoped>
.post {
  container-name: post;
  container-type: inline-size;
}

.post-container {
  @apply grid grid-cols-2 gap-2;
}

.post-container div {
  transition: 0.5s;
  aspect-ratio: 4/3;
}

@media screen and (min-width: 600px) {
  .post-container div {
    @apply flex-1;
    transition: 0.25s ease;
    aspect-ratio: unset;
    cursor: pointer;
  }

  .post-container div:nth-child(3) {
    flex: 2 2 0;
  }

  .post-container:hover div {
    flex: 1 1 0;
  }

  .post-container div:not(.more):hover {
    flex: 2 2 0;
  }
}

.menu div:nth-child(even) {
  @apply border-y;
}

@container post (width> 600px) {
  .post-container {
    @apply flex h-60;
  }
}
</style>
