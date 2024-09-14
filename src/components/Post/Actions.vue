<template>
    <section v-if="userID === user._id" class="ml-auto relative">
        <div @click="menuToggle = !menuToggle" :name="postID"
            class="cursor-pointer border border-gray-400 size-8 centered rounded-full">
            <Icon icon="bi:three-dots-vertical" />
        </div>

        <div :class="{ hidden: !menuToggle }" class=" menu absolute min-w-32 shadow rounded-xl overflow-hidden -left-4 -translate-x-full top-0 bg-white
            border">
            <div v-for="(option, index) in postAtctions" :key="index" @click="option?.action"
                class="flex items-center gap-2 py-2 px-3 capitalize text-sm cursor-pointer hover:bg-gray-200 active:bg-black/15">
                <Icon :icon="option.icon" class="text-lg" />
                {{ option.label }}
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useConvexMutation } from '@convex-vue/core';
import { api } from '../../../convex/_generated/api';
import { toRef } from 'vue';
import { openPost } from '../../store/EditPost';
import { Id } from '../../../convex/_generated/dataModel';
import { user } from '../../store/user.store';
import { Icon } from '@iconify/vue/dist/iconify.js';

const postMutation = useConvexMutation(api.posts.deletePost);

const props = defineProps<{
    menuToggle: boolean,
    userID: Id<"users">,
    postID: Id<"posts">
    textData?: string,
}>();

const menuToggle = toRef(props.menuToggle);

interface IPostActions {
    icon: string,
    label: string,
    action: VoidFunction,
}

const postAtctions = <IPostActions[]>[
    {
        icon: 'solar:trash-bin-trash-bold',
        label: 'delete',
        action: () => postMutation.mutate({ id: props.postID }),
    },
    {
        icon: 'material-symbols:cancel',
        label: 'close',
        action: () => (menuToggle.value = !menuToggle.value),
    },
];

if (props.textData != undefined) postAtctions.unshift(
    {
        icon: 'ic:round-mode-edit',
        label: 'edit',
        action: () => { openPost(props.postID, props.textData!); menuToggle.value = false }
    }
)
</script>