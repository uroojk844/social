<template>
    <div v-if="images" class="post-container">
        <!-- image.length < 4 ? images : 3 -->
        <div v-for="(image, index) in images" :key="index">
            <img :src="getImageUrl(image)" class="rounded-xl h-full object-cover w-full" />
        </div>

        <!-- rest image count component -->
        <div v-if="images.length > 3" class="more relative rounded-xl overflow-hidden font-bold text-5xl w-full">
            <img src="http://picsum.photos/400/300.webp?4" class="rounded-xl h-full object-cover" />

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

function getImageUrl(storageId: string) {
    const getImageUrl = new URL(`https://aromatic-tiger-521.convex.site/getImage`);
    getImageUrl.searchParams.set("storageId", storageId);
    return getImageUrl.href;
}

</script>

<style>
.post-container {
    @apply grid grid-cols-2 gap-2;
}

.post-container div {
    transition: 0.5s;
    aspect-ratio: 4/3;
}

@media screen and (min-width: 600px) {
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