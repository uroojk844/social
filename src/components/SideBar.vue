<template>
  <nav
    :class="{ opened: isNavOpened }"
    class="h-dvh min-w-80 p-8 flex flex-col gap-8 transition-all duration-200 z-10"
  >
    <section class="grid justify-items-center">
      <img class="size-16 rounded-full" src="http://picsum.photos/100.webp" />
      <div class="font-[600]">urooj</div>
      <div class="text-xs text-gray-400">@uroo</div>
    </section>
    <section class="grid gap-2">
      <RouterLink
        v-for="link in routes"
        :to="link.path"
        class="py-3 px-4 rounded-xl font-semibold active flex items-center gap-2 transition-all duration-300 hover:bg-black hover:text-white"
      >
        <Icon :icon="link.icon" class="text-lg" />
        {{ link.name }}

        <div
          class="size-6 ml-auto text-xs bg-black text-white rounded-full grid place-items-center transition-colors"
          v-if="link?.notification"
        >
          {{ link.notification }}
        </div>
      </RouterLink>
    </section>

    <button
      @click="userStore.logout"
      class="mt-auto py-3 px-4 rounded-xl font-semibold active flex items-center gap-2 transition-all duration-300 hover:bg-black hover:text-white"
    >
      <Icon icon="solar:logout-3-bold" class="text-lg" />
      Logout
    </button>
    <div
      @click="isNavOpened = false"
      class="md:hidden size-10 bg-white border border-gray-300 cursor-pointer grid place-items-center rounded-full fixed top-1/2 -translate-y-1/2 left-64 opacity-0 transition-all duration-200 delay-200 hover:bg-black hover:text-white"
      :class="{ 'translate-x-[72px] opacity-100': isNavOpened }"
    >
      <Icon icon="humbleicons:times" class="text-xl" />
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
import { isNavOpened } from "../store/NavStore";

const routes = [
  {
    icon: "material-symbols:explore",
    path: "/",
    name: "News Feed",
  },
  {
    icon: "heroicons:envelope-solid",
    path: "/messages",
    name: "Messages",
    notification: 3,
  },
  {
    icon: "mdi:facebook-messenger",
    path: "/forums",
    name: "Forums",
  },
  {
    icon: "solar:users-group-rounded-bold",
    path: "/friends",
    name: "Friends",
    notification: 3,
  },
  {
    icon: "material-symbols:imagesmode",
    path: "/media",
    name: "Media",
  },
  {
    icon: "material-symbols:settings",
    path: "/settings",
    name: "Settings",
  },
];
</script>

<style scoped>
.router-link-exact-active {
  @apply bg-black text-white;
}

@media screen and (width<=768px) {
  nav {
    @apply -translate-x-full bg-white absolute left-0;
  }

  nav.opened {
    @apply translate-x-0 shadow-[4px_0_16px_4px_rgba(0,0,0,0.2)];
  }
}
</style>
