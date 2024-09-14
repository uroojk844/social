<template>
    <div class="grid gap-2 grid-cols-3 items-center justify-between" :class="{
        'mx-auto': centered,
    }">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ centered: boolean }>(), {
    centered: false,
});
</script>