<template>
  <section class="post p-6 rounded-2xl grid gap-4" :class="{
    lightyellow: post.type == 'text',
    lightblue: post.type == 'image',
    purple: post.type == 'video',
  }">
    <div class="flex gap-2">
      <img class="size-8 rounded-full" :src="userData.data.value?.picture" />
      <div class="font-semibold">
        <div class="text-sm">{{ userData.data.value?.name }}</div>
        <div class="text-[10px] text-gray-400">
          {{ moment(post?._creationTime).fromNow() }}
        </div>
      </div>

      <Actions :menuToggle :postID="post._id" :userID="post.userID" :textData="post.data.text" />
    </div>

    <div v-if="post.type == 'text'" class="text-sm">{{ post.data?.text }}</div>

    <!-- Images -->
    <Images v-if="post.type == 'image'" :images="post.data.images" />
    <!-- Videos -->
    <Videos v-if="post.type == 'video'" :videos="post.data.video" />

    <!-- Views, Likes,  -->
    <Controls :userID="post.userID" :postID="post._id" :likes="post.likes" :views="post.views" />
  </section>
</template>

<script lang="ts" setup>
import moment from "moment";
import { ref } from "vue";
import { useConvexQuery } from "@convex-vue/core";
import { api } from "../../convex/_generated/api";
import Images from "./Post/Images.vue";
import { Post } from "../interfaces/post.interface";
import Videos from "./Post/Videos.vue";
import Controls from "./Post/Controls.vue";
import Actions from "./Post/Actions.vue";

const { post } = defineProps<{
  post: Post
}>();

const userData = useConvexQuery(api.users.getUser, { id: post.userID });

const menuToggle = ref(false);
</script>

<style scoped>
.post {
  container-name: post;
  container-type: inline-size;
}

.menu div:nth-child(even) {
  @apply border-y;
}

@container post (width> 600px) {
  .post-container {
    @apply flex h-60;
  }
}
</style>
