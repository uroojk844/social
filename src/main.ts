import { createApp } from "vue";
import { router } from "./router.ts";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createConvexVue } from "@convex-vue/core";
const app = createApp(App);
const pinia = createPinia();

const convexVue = createConvexVue({
  convexUrl: import.meta.env.VITE_CONVEX_URL,
});

app.use(router);
app.use(pinia);
app.use(convexVue);
app.mount("#app");
