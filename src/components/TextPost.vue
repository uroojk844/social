<template>
  <section class="lightyellow p-6 rounded-2xl grid gap-3">
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

    <section class="flex gap-6">
      <div
        v-for="(icon, index) in [
          'mdi:eye',
          'ph:heart-fill',
          'majesticons:comment-2-text',
        ]"
        :key="index"
        class="flex gap-1 items-center text-gray-400 cursor-pointer"
      >
        <Icon :icon="icon" class="text-xl" />
        <span>{{ Math.floor(Math.random() * 1000) }}</span>
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
</script>
