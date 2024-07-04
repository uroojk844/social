import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export const routes = <RouteRecordRaw[]>[
  {
    path: "/",
    name: "News Feed",
  },
  {
    path: "/messages",
    name: "Messages",
  },
  {
    path: "/forums",
    name: "Forums",
  },
  {
    path: "/friends",
    name: "Friends",
  },
  {
    path: "/media",
    name: "Media",
  },
  {
    path: "/settings",
    name: "Settings",
  },
];

export const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});
