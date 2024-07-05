<template>
  <IconButton
    :class="{ 'text-pink-400': $props.isLiked }"
    @click="() => likePost($props.id)"
    icon="ph:heart-fill"
    label="like"
  />
</template>
+
<script lang="ts" setup>
import { likePost } from "../store/post.store";
import IconButton from "../components/IconButton.vue";

defineProps<{
  id: Number;
  isLiked: Boolean;
}>();
</script>
