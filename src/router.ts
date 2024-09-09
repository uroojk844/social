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
    path: "/auth",
    name: "auth",
    component: () => import("./pages/Auth.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("./components/Login.vue"),
      },
      {
        path: "register",
        name: "register",
        component: () => import("./components/Register.vue"),
      },
    ],
  },
];

export const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});
