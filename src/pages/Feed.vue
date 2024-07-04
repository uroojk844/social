<template>
  <main class="">
    <section class="flex items-center">
      <button class="mr-4 md:hidden" @click="isNavOpened = !isNavOpened">
        <Icon icon="gravity-ui:bars-unaligned" class="text-xl" />
      </button>
      <div class="text-xl font-bold">Feeds</div>

      <ul class="flex items-center gap-4 ml-auto text-gray-400">
        <li
          v-for="(filter, index) in filters"
          :key="index"
          class="cursor-pointer font-semibold"
          :class="{ 'text-black': filter == current }"
          @click="current = filter"
        >
          {{ filter }}
        </li>
      </ul>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import { isNavOpened } from "../store/NavStore";
const current = ref("Recents");
const filters = ["Recents", "Friends", "Popular"];
</script>
