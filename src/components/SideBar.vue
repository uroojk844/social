<template>
  <nav class="p-8 flex flex-col gap-8 transition-all duration-200">
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
      class="mt-auto font-bold border-2 border-gray-400 border-dashed rounded-lg py-16 text-center"
    >
      Download the App
    </section>
  </nav>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";

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
    @apply -translate-x-full bg-white absolute left-0 min-w-80 h-full;
  }
}
</style>
