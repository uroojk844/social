<template>
  <form @submit.prevent="createPost" class="grey p-6 rounded-2xl grid mb-1">
    <details class="mb-3">
      <summary
        for="textarea"
        class="cursor-pointer flex gap-2 items-center p-2 bg-white rounded-full text-gray-400"
      >
        <img class="size-8 rounded-full" src="http://picsum.photos/40.webp" />
        <div class="flex-1 text-sm">Share something</div>
      </summary>
      <textarea
        v-model="text"
        placeholder="Share something"
        class="mt-4 w-full border border-gray-300 outline-none rounded-xl scrollbar-none h-32 p-2 transition-all duration-500"
      ></textarea>
    </details>

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

      <button
        class="text-sm bg-black ml-auto text-white px-6 py-2 rounded-full cursor-pointer"
      >
        Send
      </button>
    </section>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import IconButton from "./IconButton.vue";
import { addPost } from "../store/post.store";
const text = ref("");

async function createPost() {
  let data = {
    type: "text",
    text: text.value,
  };
  await addPost(data);
  text.value = "";
}
</script>
