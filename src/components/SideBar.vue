<template>
  <nav
    :class="{ opened: isNavOpened }"
    class="min-w-80 p-8 flex flex-col gap-8 transition-all duration-200"
  >
    <section class="grid justify-items-center">
      <img class="size-16 rounded-full" src="http://picsum.photos/100.webp" />
      <div class="font-[600]">Urooj Khan</div>
      <div class="text-xs text-gray-400">@uroojk844</div>
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
    <section
      class="mt-auto font-bold border-2 border-gray-400 border-dashed rounded-lg py-4 text-center"
    >
      Download the App
    </section>
    <div
      @click="isNavOpened = false"
      class="size-10 bg-white border border-gray-300 cursor-pointer grid place-items-center rounded-full fixed top-1/2 -translate-y-1/2 left-64 opacity-0 transition-all duration-200 delay-200 hover:bg-black hover:text-white"
      :class="{ 'translate-x-24 opacity-100': isNavOpened }"
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
    @apply translate-x-0 shadow-[4px_0_16px_4px_rgba(0,0,0,0.2)] bg-white absolute left-0 h-full;
  }

  nav:not(.opened) {
    @apply -translate-x-full;
  }
}
</style>
