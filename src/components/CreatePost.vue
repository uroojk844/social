<template>
  <form @submit.prevent="createPost" class="grey p-6 rounded-2xl grid mb-1">
    <details>
      <summary for="textarea" class="cursor-pointer flex gap-2 items-center p-2 rounded-full">
        <img class="size-8 rounded-full" src="http://picsum.photos/40.webp" />
        <div class="flex-1 text-sm font-semibold">urooj</div>
      </summary>
      <textarea v-model="text" placeholder="Share something"
        class="w-full outline-none rounded-3xl scrollbar-none h-32 py-2 px-4 transition-all duration-500"></textarea>
    </details>

    <section class="flex gap-6">
      <IconButton v-for="(item, index) in [
        { icon: 'solar:gallery-bold', label: 'Image' },
        { icon: 'material-symbols:location-on-rounded', label: 'Location' },
        { icon: 'carbon:earth-filled', label: 'Public' },
      ]" :key="index" :icon="item.icon" :label="item.label" class="text-gray-950" icon-size="sm" />

      <button :disabled="isLoading"
        class="text-sm disabled:bg-gray-400 disabled:cursor-not-allowed bg-black ml-auto text-white px-6 py-2 rounded-full cursor-pointer">
        {{ isLoading ? "Posting..." : "Send" }}
      </button>
    </section>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import IconButton from "./IconButton.vue";
const text = ref("");

import { useConvexMutation } from "@convex-vue/core";
import { api } from "../../convex/_generated/api";
import { uid } from "../interfaces/user.interface";
import { AlertStore } from "../store/AlertStore";

const { mutate, isLoading } = useConvexMutation(api.posts.createPost);

async function createPost() {
  let data = { text: text.value };
  mutate({ uid: uid, type: "text", data: data }).then(() => AlertStore.type = "success").finally(() => text.value = "");
}
</script>

<style scoped>
details {
  transition: 500ms ease;
  @apply border h-12 overflow-hidden border-gray-300 mb-3 rounded-3xl bg-white;
}

details[open] {
  height: 176px;
}
</style>
