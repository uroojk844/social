<script lang="ts" setup>
import SideBar from "./components/SideBar.vue";
import AsideView from "./components/AsideView.vue";
import { RouterView } from "vue-router";
import Alert from "./components/Alert.vue";
import { useAuth0 } from "@auth0/auth0-vue";
import Auth from "./pages/Auth.vue";
import EditPost from "./components/EditPost.vue";
const auth0 = useAuth0();
</script>

<template>
  <section v-if="auth0.isLoading.value" class="grid place-items-center h-40">
    <Icon icon="svg-spinners:bars-rotate-fade" class="text-3xl" />
  </section>
  <!-- Main app -->
  <section v-else-if="auth0.isAuthenticated.value">
    <SideBar />
    <main class="grid gap-4 content-start px-4 md:px-8 overflow-auto scrollbar">
      <RouterView />
    </main>
    <AsideView />
    <EditPost />
  </section>

  <!-- auth0 redirect -->
  <Auth v-else />

  <!-- Alert Component -->
  <Alert />
</template>

<style scoped>
section {
  @apply grid h-screen grid-cols-[1fr] sm:grid-cols-[auto_max-content] lg:grid-cols-[max-content_auto_max-content];
}
</style>