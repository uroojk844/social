<template>
    <div class="grid gap-2 items-center justify-between" :class="{
        ['grid-cols-' + columnCount]: columnCount, 'mx-auto': centered,
    }">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ columnCount: number, centered: boolean }>(), {
    columnCount: 3,
    centered: false,
});
</script>