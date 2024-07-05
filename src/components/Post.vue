<template>
  <section
    class="p-6 rounded-2xl grid gap-3"
    :class="$props.post?.type == 'image' ? 'lightblue' : 'lightyellow'"
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
      asperiores, iusto beatae assumenda aut vel?
    </div>

    <div v-if="$props.post?.type == 'image'" class="post-container">
      <div
        v-for="(_, index) in images < 4 ? images : 3"
        :key="index"
        class="w-full"
        :src="'http://picsum.photos/400/300.webp?' + (index + 1)"
      >
        <img
          :src="'http://picsum.photos/400/300.webp?' + (index + 1)"
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
          class="absolute cursor-pointer inset-0 centered backdrop-blur-sm text-white text-center"
        >
          +{{ images - 3 }}
        </div>
      </div>
    </div>

    <section class="flex gap-6">
      <div
        v-for="(item, index) in [
          { icon: 'mdi:eye', label: Math.floor(Math.random() * 1000) },
          {
            icon: 'ph:heart-fill',
            label: 'like',
          },
          { icon: 'majesticons:comment-2-text', label: 'comment' },
        ]"
        :key="index"
        class="flex gap-1 items-center text-gray-400 cursor-pointer"
        :class="{
          'text-pink-400': $props.post.isLiked && item.label == 'like',
        }"
        @click="() => likePost($props.post.id)"
      >
        <Icon :icon="item.icon" class="text-2xl" />
        <span class="max-sm:hidden capitalize">{{ item.label }}</span>
      </div>

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
import { likePost } from "../store/post.store";

const images = 7;

defineProps<{
  post: {
    id: Number;
    type: "text" | "image" | "video";
    isLiked: Boolean;
  };
}>();
</script>

<style scoped>
.post-container {
  @apply grid grid-cols-2 gap-2;
}

.post-container div {
  transition: 0.5s;
}

@media screen and (min-width: 768px) {
  .post-container {
    @apply flex h-64;
  }

  .post-container div {
    @apply flex-1;
    transition: 0.25s ease;
  }

  .post-container div:nth-child(3) {
    flex: 2 2 0;
  }

  .post-container div:not(.more):hover {
    flex: 5 5 0;
  }
}
</style>
