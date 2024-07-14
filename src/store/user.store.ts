import { ref, watch } from "vue";
import { router } from "../router";
import { AlertStore } from "./AlertStore";
import { RegisterUser, User } from "../interfaces/user.interface";

const userData = localStorage.getItem("user");

const user = ref<User | null>(
  (userData && (JSON.parse(userData) as User)) || null
);

export function getUser(): User | null {
  return user.value;
}

function isLogin() {
  return user.value != null;
}

const url = import.meta.env.VITE_APP_BACKEND_URL;

watch(user, () => {
  isLogin() ? router.push("/") : router.push("login");
});

function login(credentials: { username: string; password: string }) {
  fetch(`${url}/user/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data?.success) {
        localStorage.setItem("user", JSON.stringify(data.success));
        user.value = data.success;
        AlertStore.type = "success";
      } else {
        AlertStore.type = "error";
      }
    })
    .catch((err) => {
      AlertStore.type = "success";
      console.log(err);
    });
}

function register(data: RegisterUser) {
  fetch(`${url}/user`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data?.success) {
        AlertStore.type = "success";
        router.push("/auth/login");
      } else {
        AlertStore.type = "error";
      }
    })
    .catch((err) => {
      AlertStore.type = "success";
      console.log(err);
    });
}

function logout() {
  localStorage.removeItem("user");
  user.value = null;
}

export { isLogin, login, logout, register };
