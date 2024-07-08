import { ref } from "vue";
import { Post } from "../interfaces/post.interface";
import { AlertStore } from "./AlertStore";

export let posts = ref<Post[]>([]);

const url = import.meta.env.VITE_APP_BACKEND_URL;

export function likePost(id: Number) {
  const post = posts.value.find((post) => post.id == id)!;
  post.isLiked = !post.isLiked;
}

export async function getPosts() {
  const data = await fetch(`${url}/posts`);
  posts.value = await data.json();
}

export async function addPost(data: any) {
  await fetch(`${url}/post`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((d) => {
      if (d?.success) {
        posts.value.unshift(d.success);
        AlertStore.type = "success";
      } else AlertStore.type = "error";
    });
}

export async function deletePost(id: Number) {
  await fetch(`${url}/deletePost`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      id: id,
    }),
  })
    .then((res) => res.json())
    .then((d) => {
      if (d?.success) {
        posts.value = posts.value.filter((post) => post.id !== d?.success);
        AlertStore.type = "success";
      } else AlertStore.type = "error";
      console.log(d);
    });
}
