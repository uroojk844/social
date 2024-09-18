<template>
    <video :src="videos" class="aspect-video rounded-xl w-full" loading="lazy" controls autoplay></video>
</template>

<script setup lang="ts">
defineProps<{
    videos?: string,
}>()
</script>