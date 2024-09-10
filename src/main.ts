import { createApp } from "vue";
import { router } from "./router.ts";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { createConvexVue } from "@convex-vue/core";
import { createAuth0 } from "@auth0/auth0-vue";

const app = createApp(App);
const pinia = createPinia();

const convexVue = createConvexVue({
  convexUrl: import.meta.env.VITE_CONVEX_URL,
});

const auth = createAuth0({
  domain: "dev-hx8mpo59.us.auth0.com",
  clientId: "mc2x8CNjvynUcsPxHGLQays2HoseULDO",
  authorizationParams: {
    redirect_uri: window.location.origin,
  },
});

app.use(router);
app.use(pinia);
app.use(auth);
app.use(convexVue);
app.mount("#app");
