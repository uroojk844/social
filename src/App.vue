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
  <section v-else-if="auth0.isAuthenticated.value" class="grid h-screen grid-cols-[max-content_auto_max-content]">
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
@media screen and (600px <=width <=768px) {
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