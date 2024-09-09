import { defineStore } from "pinia";
import { AlertStore } from "./AlertStore";
import { removeToken, setToken } from "../utils/token";
import { RegisterUser, User } from "../interfaces/user.interface";
import { router } from "../router";
const url = import.meta.env.VITE_APP_BACKEND_URL;

const userData = localStorage.getItem("user");

export const useUserStore = defineStore("user", {
  state: () => ({
    user: (userData && (JSON.parse(userData) as User)) || null,
  }),
  getters: {
    getName(state) {
      return state.user?.name;
    },
    getID(state) {
      return state.user?._id;
    },
    getUserName(state) {
      return state.user?.username;
    },
  },
  actions: {
    login(credentials: { username: string; password: string }) {
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
            setToken(data.success.token);
            let user = {
              name: data.success.name,
              _id: data.success._id,
              username: data.success.username,
            };
            localStorage.setItem("user", JSON.stringify(user));
            this.user = user;
            AlertStore.type = "success";
            router.push("/");
          } else {
            AlertStore.type = "error";
          }
        })
        .catch((err) => {
          AlertStore.type = "error";
          console.log(err);
        });
    },
    register(data: RegisterUser) {
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
          AlertStore.type = "error";
          console.log(err);
        });
    },
    logout() {
      removeToken();
      this.user = null;
    },
  },
});
