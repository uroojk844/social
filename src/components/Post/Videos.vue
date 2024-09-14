<template>
    <iframe :src="videos" class="aspect-video rounded-xl w-full" loading="lazy"
        title="Learn Vue 3 - Ep 22, Dependency Injection With Provide and Inject" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</template>

<script setup lang="ts">
defineProps<{
    videos?: string,
}>()
</script>