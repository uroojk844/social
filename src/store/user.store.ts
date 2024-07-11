import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    _id: null as null | string,
  }),
  getters: {
    isLogin(state) {
      return state._id != null;
    },
  },
  actions: {
    login(id: string) {
      this._id = id;
    },
    logout() {
      this._id = null;
    },
  },
});
