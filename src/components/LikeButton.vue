<template>
  <IconButton :class="{ 'text-pink': isLiked }" icon="ph:heart-fill" :label="label || 0" @click="likePost" />
</template>
<script lang="ts" setup>
import { useConvexMutation } from "@convex-vue/core";
import IconButton from "../components/IconButton.vue";

import { user } from "../store/user.store";

import { Id } from "../../convex/_generated/dataModel";
import { api } from "../../convex/_generated/api";

const { mutate } = useConvexMutation(api.posts.likePost);

const props = defineProps<{
  id: Id<"posts">;
  isLiked: boolean | undefined ;
  label: number;
}>();

function likePost() {
  if (user._id) {
    mutate({ id: props.id, userId: user._id })
  }
}

</script>
