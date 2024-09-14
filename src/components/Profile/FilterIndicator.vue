<template>
    <div class="cursor-pointer capitalize text-xs  flex items-center gap-1" :class="{
        'px-3 py-1 rounded-full': defaultPostFilter == item,
        'bg-yellow/50': defaultPostFilter == item && item == 'text',
        'bg-lightblue/50': defaultPostFilter == item && item == 'images',
        'bg-purple/15': defaultPostFilter == item && item == 'videos',
    }">
        <div class="size-2 rounded-full" :class="{
            'bg-yellow contrast-75': defaultPostFilter == item && item == 'text',
            'bg-lightblue  contrast-75': defaultPostFilter == item && item == 'images',
            'bg-purple': defaultPostFilter == item && item == 'videos',
        }"></div>
        {{ item }}
    </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue';

const props = defineProps<{
    defaultPostFilter: string,
    item: string,
}>();

const defaultPostFilter = toRef(() => props.defaultPostFilter);
</script>