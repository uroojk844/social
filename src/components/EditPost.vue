<template>
    <main v-if="isOpen" class="fixed inset-0 grid place-items-center backdrop-blur-sm z-[100]">
        <section
            class="max-w-xl w-full rounded-xl shadow-lg overflow-hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow">
            <div class="p-4 border-b border-transparent/10 font-medium flex items-center justify-between">
                <span class="text-black/80">Edit post</span>
                <div @click="editModelAction = false"
                    class="size-6 rounded-full grid place-items-center border border-transparent/5 hover:text-red-600 hover:border-red-600 cursor-pointer transition-colors">
                    <Icon icon="material-symbols:close-rounded" />
                </div>
            </div>
            <div class="p-4 grid gap-5">
                <textarea v-model="editModelText" rows="6"
                    class="bg-transparent/5 w-full text-black/80 outline-none border rounded-lg resize-none p-4"></textarea>
                <div class="flex items-center gap-8 justify-end ">
                    <IconButton @click="editModelAction = true" icon="material-symbols:check" label="Save"
                        class="text-sm bg-black/80 text-white py-1.5 px-4 rounded-lg transition-transform active:scale-95" />
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import IconButton from './IconButton.vue';
import { editModelAction, editModelText, isOpen, postId } from '../store/EditPost';
import { useConvexMutation } from '@convex-vue/core';
import { api } from '../../convex/_generated/api';
import { watch } from 'vue';

const { mutate } = useConvexMutation(api.posts.editPost);

watch(editModelAction, () => {
    if (postId.value && editModelAction.value == true) {
        mutate({ id: postId.value, text: editModelText.value });
    }
    postId.value = null;
    isOpen.value = false;
    editModelText.value = "";
    editModelAction.value = null;
})
</script>