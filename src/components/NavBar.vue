<template>
    <section class="flex items-center sticky top-0 bg-white py-4 sm:py-8 z-[9]">
        <button class="mr-4" @click="isNavOpened = !isNavOpened">
            <Icon icon="gravity-ui:bars-unaligned" class="text-xl" />
        </button>
        <div class="text-2xl font-bold">{{ title }}</div>

        <slot></slot>
    </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
import { isNavOpened } from '../store/NavStore';

defineProps<{ title: string }>()
</script>