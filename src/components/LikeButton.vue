<template>
  <IconButton
    :class="{ 'text-pink-400': $props.isLiked }"
    icon="ph:heart-fill"
    :label="label || 0"
  />
</template>
+
<script lang="ts" setup>
import IconButton from "../components/IconButton.vue";
defineProps<{
  id: string;
  isLiked: boolean;
  label: number;
}>();
</script>
