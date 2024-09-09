<script lang="ts" setup>
import SideBar from "./components/SideBar.vue";
import AsideView from "./components/AsideView.vue";
import { RouterView } from "vue-router";
import Alert from "./components/Alert.vue";
</script>
<template>
  <section
    v-if="true"
    class="grid h-screen grid-cols-[max-content_auto_max-content]"
  >
    <SideBar />
    <main class="grid gap-4 content-start px-4 md:px-8 overflow-auto scrollbar">
      <RouterView />
    </main>
    <AsideView />
  </section>
  <section v-else>
    <RouterView />
  </section>
  <Alert />
</template>

<style scoped>
@media screen and (600px <= width <= 768px) {
  section {
    @apply grid-cols-[auto_max-content];
  }
}

@media screen and (width < 600px) {
  section {
    @apply grid-cols-[1fr];
  }
}
</style>
./store/user2.store.ts
