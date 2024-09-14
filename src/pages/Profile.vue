<script setup lang="ts">
import { computed, ref } from 'vue';
import IconButton from '../components/IconButton.vue';
import NavBar from '../components/NavBar.vue';
import { user } from '../store/user.store';
import Post from '../components/Post.vue';
import { useConvexQuery } from '@convex-vue/core';
import { api } from '../../convex/_generated/api';
import { useRoute } from 'vue-router';
import { Id } from '../../convex/_generated/dataModel';
import Counts from '../components/Profile/Counts.vue';
import Row from '../components/Row.vue';
import FilterIndicator from '../components/Profile/FilterIndicator.vue';
import Loader from '../components/Loader.vue';

const defaultPostFilter = ref("text")
const postFilter = ['text', 'images', 'videos'];

const id = useRoute().params.id as Id<"users">;
const userPosts = useConvexQuery(api.posts.getUserTextPosts, { userID: id });

const filteredPost = computed(() => userPosts.data.value.filter(post => {
    switch (defaultPostFilter.value) {
        case 'text':
            return post.data.text;
        case 'images':
            return post.data.images;
        case 'videos':
            return post.data.video;
    }
})
);

</script>

<template>
    <main class="grid gap-2">
        <NavBar title="Profile" />

        <Row :centered="true" class="sm:gap-8 w-[min(36rem,100%)] grid-cols-[max-content_1fr]">
            <img class="size-24 rounded-full" src="http://picsum.photos/300.webp" alt="profile_pic">

            <Row class="grid-cols-3">
                <Counts :counts="userPosts.data.value?.length" label="Posts" />
                <Counts :counts="23" label="Followers" />
                <Counts :counts="23" label="Following" />
            </Row>

        </Row>

        <div>
            <div class="font-semibold">{{ user.name }}</div>
            <div class="text-sm">@{{ user.username }}uroojk844</div>
        </div>

        <Row class="my-2">
            <IconButton icon="solar:camera-add-bold" label="upload picture"
                class="justify-center border py-1.5 px-4 rounded-lg max-sm:px-2 max-sm:text-xs" />
            <IconButton icon="solar:pen-2-bold" label="Edit profile"
                class="justify-center border py-1.5 px-4 rounded-lg max-sm:px-2 max-sm:text-xs" />
        </Row>

        <!-- All user post -->
        <div class="flex items-center gap-4 mb-2">
            <div class="text-lg font-medium mr-auto">All posts</div>

            <FilterIndicator v-for="(item, index) in postFilter" :key="index" :item="item" :defaultPostFilter
                @click="defaultPostFilter = item" />
        </div>

        <Loader v-if="userPosts.isLoading.value" />

        <Post v-else v-for="(post, index) in filteredPost" :key="index" :post="post" />
    </main>
</template>