import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useUserStore } from "./store/user.store.ts";
const { isLogin } = useUserStore();

export const routes = <RouteRecordRaw[]>[
  {
    path: "/",
    name: "feed",
    component: () => import("./pages/Feed.vue"),
  },
  {
    path: "/messages",
    name: "Messages",
    component: () => import("./pages/Messages.vue"),
  },
  {
    path: "/forums",
    name: "Forums",
    component: () => import("./pages/Forum.vue"),
  },
  {
    path: "/friends",
    name: "Friends",
    component: () => import("./pages/Friends.vue"),
  },
  {
    path: "/media",
    name: "Media",
    component: () => import("./pages/Media.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("./pages/Settings.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("./pages/LoginPage.vue"),
  },
];

export const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});

router.beforeEach((to, from) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (isLogin) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      path: "/login",
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    };
  }
});
