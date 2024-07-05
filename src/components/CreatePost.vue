<template>
  <section class="grey p-6 rounded-2xl grid gap-3">
    <div
      class="flex gap-2 items-center p-2 bg-white rounded-full text-gray-400"
    >
      <img class="size-6 rounded-full" src="http://picsum.photos/40.webp" />
      <div class="flex-1 text-sm">Share something</div>
      <Icon icon="mingcute:emoji-fill" />
    </div>

    <section class="flex gap-6">
      <div
        v-for="(item, index) in [
          { icon: 'solar:remove-folder-bold', label: 'File' },
          { icon: 'solar:gallery-bold', label: 'Image' },
          { icon: 'solar:map-point-bold', label: 'Location' },
          { icon: 'bi:globe-americas', label: 'Public' },
        ]"
        :key="index"
        class="flex gap-1 items-center cursor-pointer"
      >
        <Icon :icon="item.icon" class="text-xl" />
        <span>{{ item.label }}</span>
      </div>

      <div
        class="bg-black ml-auto text-white px-4 py-1.5 rounded-full cursor-pointer"
      >
        Send
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
</script>
