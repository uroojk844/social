<template>
  <form @submit.prevent="createPost" enctype="multipart/form-data" class="grey p-6 rounded-2xl grid mb-1">
    <details>
      <summary for="textarea" class="cursor-pointer flex gap-2 items-center p-2 rounded-full">
        <img class="size-8 rounded-full" :src="user?.picture" />
        <div class="flex-1 text-sm font-semibold">{{ user.name }}</div>
      </summary>
      <textarea v-model="text" placeholder="Share something"
        class="w-full outline-none rounded-3xl scrollbar-none h-32 py-2 px-4 transition-all duration-500"></textarea>

    </details>

    <div v-if="filePreview" class="mb-2 relative">
      <img v-if="postType == 'image'" :src="filePreview" alt="preview" class="w-full rounded-xl">
      <video v-if="postType == 'video'" :src="filePreview" class="max-w-sm rounded-xl" controls></video>
      <div @click="filePreview = ''"
        class="absolute top-0 right-0 size-6 translate-x-3 -translate-y-3 rounded-full cursor-pointer bg-black text-white hover:text-red-500 grid place-items-center">
        <Icon icon="material-symbols:close" />
      </div>
    </div>

    <section class="flex gap-3 items-center">
      <label for="file">
        <IconButton icon="solar:gallery-bold" label="Image" class="text-gray-950" icon-size="sm" />
        <input @change="setImage" type="file" id="file" class="hidden">
      </label>

      <IconButton v-for="(item, index) in [
        // { icon: 'material-symbols:location-on-rounded', label: 'Location' },
        { icon: 'carbon:earth-filled', label: 'Public' },
      ]" :key="index" :icon="item.icon" :label="item.label" class="text-gray-950" icon-size="sm" />

      <button :disabled="isLoading"
        class="text-sm flex items-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed bg-black ml-auto text-white px-6 py-2 rounded-full cursor-pointer">
        <span class="max-sm:hidden">{{ isLoading ? "Posting..." : "Send" }}</span>
        <Icon icon="material-symbols:send-rounded" />
      </button>
    </section>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import IconButton from "./IconButton.vue";
import { useConvexMutation } from "@convex-vue/core";
import { api } from "../../convex/_generated/api";
import { AlertStore } from "../store/AlertStore";
import { user } from "../store/user.store";
import { Icon } from "@iconify/vue/dist/iconify.js";
import { PostType } from "../interfaces/post.interface";

const text = ref("");

const files = ref<File | null>();
const filePreview = ref("");

const postType = ref<PostType>("text")

const { mutate, isLoading } = useConvexMutation(api.posts.createPost);

const generateUploadUrl = useConvexMutation(api.posts.generateUploadUrl);

const images = ref<string[]>([]);
const video = ref("");

async function createPost() {
  let data = {
    text: text.value,
    images: images.value,
    video: video.value,
  };

  if (user._id && postType.value == "text") {
    mutate({ userID: user._id, type: postType.value, data: data }).then(() => AlertStore.type = "success").finally(() => text.value = "");
  }
  else if (user._id && (postType.value == "image" || postType.value == "video")) {
    const postUrl = await generateUploadUrl.mutate({});
    await fetch(postUrl as string, {
      method: "POST",
      headers: { "Content-Type": 'multipart/form-data' },
      body: files.value,
    }).then(res => res.json()).then(res => {
      if (postType.value == "image") {
        images.value.push(res.storageId);
      } else {
        video.value = res.storageId;
      }
    });

    mutate({ userID: user._id, type: postType.value, data: data })
      .then(() => AlertStore.type = "success")
      .finally(() => { text.value = ""; filePreview.value = ""; postType.value = "text" });
  }
}

async function setImage(event: any) {
  files.value = event.target.files[0];
  postType.value = files.value?.type.includes("mp4") ? "video" : "image";
  postType.value == "video" && alert("we are working on video uploading part!!");
  if (files.value) {
    const url = URL.createObjectURL(files.value);
    filePreview.value = url;
  }
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
