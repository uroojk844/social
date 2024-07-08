<template>
  <section
    class="post p-6 rounded-2xl grid gap-4"
    :class="{
      lightyellow: $props.post.type == 'text',
      lightblue: $props.post.type == 'image',
      purple: $props.post.type == 'video',
    }"
  >
    <div class="flex gap-2">
      <img class="size-8 rounded-full" src="http://picsum.photos/40.webp" />
      <div class="font-semibold">
        <div class="text-sm">George Lobko</div>
        <div class="text-[10px] text-gray-400">2 hours ago</div>
      </div>

      <div class="ml-auto border border-gray-400 size-8 centered rounded-full">
        <Icon icon="bi:three-dots-vertical" />
      </div>
    </div>

    <div class="text-sm">
      {{
        post?.text ||
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam asperiores, iusto beatae assumenda aut vel?"
      }}
    </div>

    <!-- Images -->
    <div v-if="$props.post?.type == 'image'" class="post-container">
      <div v-for="(_, index) in images < 4 ? images : 3" :key="index">
        <img
          :src="
            'http://picsum.photos/400/300.webp?' +
            Math.floor(Math.random() * 1000)
          "
          class="rounded-xl h-full object-cover w-full"
        />
      </div>

      <div
        v-if="images > 3"
        class="more relative rounded-xl overflow-hidden font-bold text-5xl w-full"
      >
        <img
          src="http://picsum.photos/400/300.webp?4"
          class="rounded-xl h-full object-cover"
        />

        <div
          class="absolute cursor-pointer size-full top-0 centered backdrop-blur-sm text-white text-center"
        >
          +{{ images - 3 }}
        </div>
      </div>
    </div>

    <!-- Videos -->
    <iframe
      v-if="$props.post?.type == 'video'"
      class="aspect-video rounded-xl w-full"
      src="https://www.youtube.com/embed/PRwnRKVsBe8"
      title="Learn Vue 3 - Ep 22, Dependency Injection With Provide and Inject"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>

    <section class="flex gap-6">
      <IconButton
        icon="mdi:eye"
        :label="Math.floor(Math.random() * 1000).toString()"
      />
      <LikeButton :id="$props.post.id" :is-liked="$props.post.isLiked" />
      <IconButton icon="majesticons:comment-2-text" label="comment" />

      <div
        class="hidden pink ml-auto text-white px-4 py-1.5 rounded-full cursor-pointer"
      >
        🔥woow!!!
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { Post } from "../interfaces/post.interface";
import LikeButton from "../components/LikeButton.vue";
import IconButton from "./IconButton.vue";

const images = 7;

defineProps<{
  post: Post;
}>();
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

@container post (width> 600px) {
  .post-container {
    @apply flex h-60;
  }
}
</style>
