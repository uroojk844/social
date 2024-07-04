<template>
  <nav class="hidden flex justify-between items-center">
    <button @click="isNavOpened = !isNavOpened">
      <Icon icon="gravity-ui:bars-unaligned" class="text-xl" />
    </button>
    <img class="w-10 rounded-full" src="http://picsum.photos/40.webp" />
  </nav>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { isNavOpened } from "../store/NavStore";
</script>
