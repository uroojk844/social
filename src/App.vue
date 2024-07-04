<script lang="ts" setup>
import SideBar from "./components/SideBar.vue";
import MainView from "./components/MainView.vue";
import AsideView from "./components/AsideView.vue";
</script>
<template>
  <section class="grid h-full grid-cols-5">
    <SideBar />
    <MainView />
    <AsideView />
  </section>
</template>

<style scoped>
@media screen and (width<768px) {
  section {
    @apply grid-cols-2;
  }
}
</style>
