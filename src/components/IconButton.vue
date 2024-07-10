<template>
  <div class="flex gap-2 items-center cursor-pointer text-gray-400">
    <Icon
      :icon="$props.icon"
      :class="{
        'text-xl': $props.iconSize == 'sm',
        'text-2xl': $props.iconSize == 'md',
      }"
    />
    <span class="max-sm:hidden capitalize">{{ $props.label }}</span>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";

withDefaults(
  defineProps<{
    icon: string;
    label: string | number;
    iconSize?: "sm" | "md";
  }>(),
  {
    iconSize: "md",
  }
);
</script>
