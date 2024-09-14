<template>
    <section class="flex gap-6">
        <IconButton icon="mdi:eye" :label="views || 0" />
        <LikeButton :id="postID" :is-liked="likes?.includes(userID)" :label="likes?.length || 0" />
        <IconButton icon="majesticons:comment-2-text" label="comment" />
        <div v-if="false" class="pink ml-auto text-white px-4 py-1.5 rounded-full cursor-pointer">
            🔥woow!!!
        </div>
    </section>
</template>

<script setup lang="ts">
import { Id } from '../../../convex/_generated/dataModel';
import IconButton from '../IconButton.vue';
import LikeButton from '../LikeButton.vue';

defineProps<{
    postID: Id<"posts">,
    userID: Id<"users">,
    views?: number,
    likes?: Id<"users">[],
}>()
</script>