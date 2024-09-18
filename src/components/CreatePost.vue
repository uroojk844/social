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

    <!-- Image Preview -->

    <div v-if="previews.length" class="mb-2 relative post">
      <Images v-if="postType == 'image'" :images="previews" />
      <video v-if="postType == 'video'" :src="previews[0]" class="max-w-sm rounded-xl" controls></video>
      <div @click="resetAll"
        class="absolute top-0 right-0 size-6 translate-x-3 -translate-y-3 rounded-full cursor-pointer bg-black text-white hover:text-red-500 grid place-items-center">
        <Icon icon="material-symbols:close" />
      </div>
    </div>

    <!--End of Image Preview -->

    <!-- Create Post buttons -->
    <section class="flex gap-3 items-center">
      <label for="image">
        <IconButton icon="solar:gallery-bold" label="Image" class="text-gray-950" icon-size="sm" />
        <input @change="setFile($event, 'image')" type="file" accept="image/*,.heic" multiple id="image"
          class="hidden" />
      </label>

      <label for="video">
        <IconButton icon="solar:videocamera-add-outline" label="Video" class="text-gray-950" icon-size="sm" />
        <input @change="setFile($event, 'video')" type="file" accept="video/*" id="video" class="hidden" />
      </label>

      <button :disabled="isUploading"
        class="text-sm flex items-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed bg-black ml-auto text-white px-6 py-2 rounded-full cursor-pointer">
        <span class="max-sm:hidden">{{ isUploading ? "Posting..." : "Send" }}</span>
        <Icon icon="material-symbols:send-rounded" />
      </button>
    </section>
  </form>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import IconButton from "./IconButton.vue";
import { useConvexMutation } from "@convex-vue/core";
import { api } from "../../convex/_generated/api";
import { AlertStore } from "../store/AlertStore";
import { user } from "../store/user.store";
import { Icon } from "@iconify/vue/dist/iconify.js";
import { isUploading, postType, previews, resetAll, setFile, uploadFiles } from "../functions/uploadFiles";
import Images from "./Post/Images.vue";

const text = ref("");
const { mutate } = useConvexMutation(api.posts.createPost);


const images = ref<string[]>([]);
const video = ref("");

async function createPost() {
  const data = computed(() => {
    return {
      text: text.value,
      images: images.value,
      video: video.value,
    }
  });

  if (user._id && postType.value == "text") {
    mutate({ userID: user._id, type: postType.value, data: data.value }).then(() => AlertStore.type = "success").finally(() => text.value = "");
  }
  else if (user._id && (postType.value == "image" || postType.value == "video")) {
    if (postType.value == "image") {
      images.value = await uploadFiles();
    } else if (postType.value == "video") {
      let files = await uploadFiles();
      video.value = files[0];
    }
    mutate({ userID: user._id, type: postType.value, data: data.value })
      .then(() => AlertStore.type = "success")
      .finally(() => {
        text.value = "";
        previews.value = [];
        postType.value = "text";
        isUploading.value = false;
      });
  }
}
</script>

<style scoped>
.post {
  container-name: post;
  container-type: inline-size;
}

@container post (width> 600px) {
  .post-container {
    @apply flex h-60;
  }
}

details {
  transition: 500ms ease;
  @apply border h-12 overflow-hidden border-gray-300 mb-3 rounded-3xl bg-white;
}

details[open] {
  height: 176px;
}
</style>
