import { Post } from "../interfaces/post.interface";
import { AlertStore } from "./AlertStore";
import { defineStore } from "pinia";
import { getUser } from "../store/user.store";

const url = import.meta.env.VITE_APP_BACKEND_URL;

export const usePostStore = defineStore("posts", {
  state: () => ({
    posts: [] as Post[],
  }),
  getters: {
    getPosts(state) {
      return state.posts;
    },
  },
  actions: {
    async loadPosts() {
      const data = await fetch(`${url}/post`);
      this.posts = await data.json();
    },
    async likePost(id: string) {
      if (getUser() == null) return;
      await fetch(`${url}/post/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          postid: id,
          userid: getUser()?._id,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res?.success) {
            const idx = this.posts.findIndex((post) => post._id == id);
            this.posts[idx] = res.success;
            AlertStore.type = "success";
          } else {
            AlertStore.type = "error";
          }
        })
        .catch((error) => {
          console.log({ error });
          AlertStore.type = "error";
        });
    },
    async addPost(data: any) {
      await fetch(`${url}/post`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ ...data, userid: getUser()?._id }),
      })
        .then((res) => res.json())
        .then((d) => {
          if (d?.success) {
            this.posts.unshift(d.success as Post);
            AlertStore.type = "success";
          } else AlertStore.type = "error";
        });
    },
    async deletePost(id: string) {
      await fetch(`${url}/post/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((d) => {
          if (d?.success) {
            const idx = this.posts.findIndex((post: Post) => post._id == id);
            this.posts.splice(idx, 1);
            AlertStore.type = "success";
          } else AlertStore.type = "error";
        });
    },
  },
});
