import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

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
    path: "/profile/:id",
    name: "Profile",
    component: () => import("./pages/Profile.vue"),
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
    path: "/auth",
    name: "auth",
    component: () => import("./pages/Auth.vue"),
  },
];

export const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});