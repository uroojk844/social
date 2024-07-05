<template>
  <section class="grey p-6 rounded-2xl grid gap-4">
    <div
      class="flex gap-2 items-center p-2 bg-white rounded-full text-gray-400"
    >
      <img class="size-6 rounded-full" src="http://picsum.photos/40.webp" />
      <div class="flex-1 text-sm">Share something</div>
      <Icon icon="mingcute:emoji-fill" class="text-2xl" />
    </div>

    <section class="flex gap-6">
      <IconButton
        v-for="(item, index) in [
          { icon: 'solar:remove-folder-bold', label: 'File' },
          { icon: 'solar:gallery-bold', label: 'Image' },
          { icon: 'material-symbols:location-on-rounded', label: 'Location' },
          { icon: 'carbon:earth-filled', label: 'Public' },
        ]"
        :key="index"
        :icon="item.icon"
        :label="item.label"
        class="text-gray-950"
        icon-size="sm"
      />

      <div
        class="text-sm bg-black ml-auto text-white px-6 py-2 rounded-full cursor-pointer"
      >
        Send
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import IconButton from "./IconButton.vue";
</script>
