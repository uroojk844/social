<template>
  <div
    v-if="AlertStore.type"
    class="from-right flex gap-4 items-center p-4 border-l-8 rounded-md fixed right-4 bottom-32 max-w-72 w-full"
    :class="
      AlertStore.type == 'error'
        ? 'border-red-400  bg-red-200'
        : 'border-green-500  bg-green-200'
    "
  >
    {{ AlertStore.type == "error" ? "Something went wrong!!!" : "Success" }}

    <div
      class="ml-auto cursor-pointer size-5 border rounded-full grid place-items-center"
      :class="
        AlertStore.type == 'error' ? 'border-red-400 ' : 'border-green-500'
      "
    >
      <Icon icon="humbleicons:times" class="text-xs" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { AlertStore } from "../store/AlertStore";
import { Icon } from "@iconify/vue";
</script>

<style scoped>
.from-right {
  animation: floatIn 2s ease;
}

@keyframes floatIn {
  0% {
    transform: translateX(calc(100% + 16px));
  }
  25% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(100% + 16px));
  }
}
</style>
