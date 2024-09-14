<template>
  <nav :class="{ opened: isNavOpened }">
    <section class="grid justify-items-center">
      <img class="size-16 rounded-full" :src="user?.picture" />
      <div class="font-[600]">{{ user.name }}</div>
      <div class="text-xs text-gray-400">@{{ user?.username }}</div>
    </section>
    <section class="grid gap-2">
      <RouterLink v-for="link in routes" :to="link.path"
        class="py-3 px-4 rounded-xl font-semibold active flex items-center gap-2 transition-all duration-300 hover:bg-black hover:text-white">
        <Icon :icon="link.icon" class="text-lg" />
        {{ link.name }}

        <div class="size-6 ml-auto text-xs bg-black text-white rounded-full grid place-items-center transition-colors"
          v-if="link?.notification">
          {{ link.notification }}
        </div>
      </RouterLink>
    </section>

    <button @click="logout"
      class="mt-auto py-3 px-4 rounded-xl font-semibold active flex items-center gap-2 transition-all duration-300 hover:bg-black hover:text-white">
      <Icon icon="solar:logout-3-bold" class="text-lg" />
      Logout
    </button>
    <div @click="isNavOpened = false"
      class="lg:hidden size-10 bg-white border border-gray-300 cursor-pointer grid place-items-center rounded-full fixed top-1/2 -translate-y-1/2 left-64 opacity-0 transition-all duration-200 delay-200 hover:bg-black hover:text-white"
      :class="{ 'translate-x-[72px] opacity-100': isNavOpened }">
      <Icon icon="humbleicons:times" class="text-xl" />
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
import { isNavOpened } from "../store/NavStore";
import { useAuth0 } from "@auth0/auth0-vue";
import { getData, user } from "../store/user.store";
import { computed } from "vue";

const auth0 = useAuth0();
import { onMounted } from 'vue';
onMounted(getData);

function logout() {
  auth0.logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  });
}

const routes = computed(() => [
  {
    icon: "solar:user-bold",
    path: "/profile/"+user._id,
    name: "Profile",
  },
  {
    icon: "material-symbols:explore",
    path: "/",
    name: "Feed",
  },
  {
    icon: "heroicons:envelope-solid",
    path: "/messages",
    name: "Messages",
    notification: 3,
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
]);
</script>

<style scoped>
.router-link-exact-active {
  @apply bg-black text-white;
}

nav {
  @apply max-lg:absolute left-0 -translate-x-full lg:translate-x-0 bg-white h-dvh min-w-80 p-8 flex flex-col gap-8 transition-all duration-200 z-10;
}

@media not all and (min-width: 1024px) {
  nav.opened {
    @apply translate-x-0;
    box-shadow: 4px 0 16px 4px rgba(0, 0, 0, 0.2);
  } 
}
</style>
