<template>
    <section class="flex gap-6">
        <IconButton icon="mdi:eye" :label="views || 0" />
        <LikeButton v-if="user._id" :id="postID" :is-liked="likes?.includes(user._id)" :label="likes?.length || 0" />
        <IconButton icon="majesticons:comment-2-text" label="comment" />
        <div v-if="false" class="pink ml-auto text-white px-4 py-1.5 rounded-full cursor-pointer">
            🔥woow!!!
        </div>
    </section>
</template>

<script setup lang="ts">
import { Id } from '../../../convex/_generated/dataModel';
import { user } from '../../store/user.store';
import IconButton from '../IconButton.vue';
import LikeButton from '../LikeButton.vue';

defineProps<{
    postID: Id<"posts">,
    views?: number,
    likes?: Id<"users">[],
}>()
</script>