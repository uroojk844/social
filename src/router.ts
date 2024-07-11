import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { isLogin } from "./store/user.store";

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

router.beforeEach((to, _, next) => {
  if (!isLogin() && to.name != "Login") next({ name: "Login" });
  else next();
});
