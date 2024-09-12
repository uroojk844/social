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
import { Icon } from '@iconify/vue/dist/iconify.js';

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

        <section class="flex gap-8 max-w-xl w-full mx-auto">
            <img class="size-24 rounded-full" src="http://picsum.photos/300.webp" alt="profile_pic">

            <div class="grid grid-cols-3 flex-1 items-center justify-between">
                <div class="text-center">
                    <div class="text-2xl font-medium">23</div>
                    <div class="text-xs">Posts</div>
                </div>
                <div class="text-center">
                    <div class="text-2xl font-medium">23</div>
                    <div class="text-xs">Followers</div>
                </div>
                <div class="text-center">
                    <div class="text-2xl font-medium">23</div>
                    <div class="text-xs">Following</div>
                </div>
            </div>
        </section>

        <div>
            <div class="font-semibold">{{ user.name }}</div>
            <div class="text-sm">@{{ user.username }}uroojk844</div>
        </div>

        <div class="grid grid-cols-2 gap-2 justify-between items-center my-2">
            <IconButton icon="solar:camera-add-bold" label="upload picture"
                class="justify-center text-black/80 border py-1.5 px-4 rounded-lg max-sm:px-2 max-sm:text-xs" />
            <IconButton icon="solar:pen-2-bold" label="Edit profile"
                class="justify-center text-black/80 border py-1.5 px-4 rounded-lg max-sm:px-2 max-sm:text-xs" />
        </div>

        <!-- All user post -->
        <div class="flex items-center gap-4 mb-2">
            <div class="text-lg font-medium mr-auto">All posts</div>

            <div class="cursor-pointer text-gray-500 capitalize"
                :class="{ 'text-black/100 font-medium': defaultPostFilter == item }" @click="defaultPostFilter = item"
                v-for="(item, index) in postFilter" :key="index">{{ item }}
            </div>
        </div>

        <div v-if="userPosts.isLoading.value" class="flex justify-center py-8">
            <Icon icon="svg-spinners:bars-rotate-fade" class="text-3xl" />
        </div>
        <Post v-else v-for="(post, index) in filteredPost" :key="index" :post="post" />
    </main>
</template>