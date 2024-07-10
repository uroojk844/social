<template>
  <IconButton
    :class="{ 'text-pink-400': $props.isLiked }"
    @click="() => postStore.likePost($props.id)"
    icon="ph:heart-fill"
    :label="label"
  />
</template>
+
<script lang="ts" setup>
import IconButton from "../components/IconButton.vue";
import { usePostStore } from "../store/post.store";
const postStore = usePostStore();
defineProps<{
  id: string;
  isLiked: boolean;
  label: number;
}>();
</script>
