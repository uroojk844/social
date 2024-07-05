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

    <div v-if="$props.post?.type == 'image'" class="flex gap-1 max-w-full">
      <div
        v-for="(_, index) in images < 4 ? images : 3"
        :key="index"
        :class="index == 2 ? 'flex-2' : 'flex-1'"
      >
        <img
          :src="'http://picsum.photos/400/300.webp?' + (index + 1)"
          class="rounded-xl h-full object-cover"
        />
      </div>
      <div
        v-if="images > 3"
        class="relative rounded-xl overflow-hidden font-bold text-xl max-w-28 w-full"
      >
        <img
          src="http://picsum.photos/400/300.webp?4"
          class="rounded-xl h-full object-cover"
        />

        <div
          class="absolute cursor-pointer inset-0 centered backdrop-blur-sm text-white text-center"
        >
          {{ images - 3 }} more images
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
        <span class="capitalize">{{ item.label }}</span>
      </div>

      <div
        class="pink ml-auto text-white px-4 py-1.5 rounded-full cursor-pointer"
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
../store/post.store ../store/post
