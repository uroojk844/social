<template>
    <div v-if="images" class="post-container">
        <div v-for="index in images.length <= 3 ? images.length : 3" :key="index">
            <img :src="images[index - 1]" class="rounded-xl h-full object-cover w-full" />
        </div>

        <!-- rest image count component -->
        <div v-if="images.length > 3" class="more relative rounded-xl overflow-hidden font-bold text-5xl w-full">
            <img :src="images[4]" class="rounded-xl h-full object-cover" />

            <div class="absolute cursor-pointer size-full top-0 centered backdrop-blur-sm text-white text-center">
                +{{ images.length - 3 }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    images: string[] | undefined,
}>()

</script>

<style>
.post-container {
    container-type: inline-size;
    @apply grid grid-cols-2 gap-2;
    
}


@container (width < 600px) {
    .post-container:not(:has(.more)) div:nth-child(3) {
        grid-column: 1/span 2;
        aspect-ratio: 2/1
    }
}

.post-container div {
    transition: 0.5s;
    aspect-ratio: 4/3;
}


@container (width > 600px) {
    .post-container div {
        @apply flex-1;
        transition: 0.25s ease;
        aspect-ratio: unset;
        cursor: pointer;
    }

    .post-container div:nth-child(3) {
        flex: 2 2 0;
    }

    .post-container:hover div {
        flex: 1 1 0;
    }

    .post-container div:not(.more):hover {
        flex: 2 2 0;
    }
}
</style>