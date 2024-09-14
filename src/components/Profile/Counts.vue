<template>
    <div class="text-center">
        <div class="text-2xl font-medium">{{ counts }}</div>
        <div class="text-xs">{{ label }}</div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    counts: number,
    label: string,
}>()
</script>