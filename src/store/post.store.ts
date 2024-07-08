import { reactive, ref } from "vue";
import { Post } from "../interfaces/post.interface";
import { AlertStore } from "./AlertStore";

export let posts = ref<Post[]>([]);

export function likePost(id: Number) {
  const post = posts.value.find((post) => post.id == id)!;
  post.isLiked = !post.isLiked;
}

export async function getPosts() {
  const data = await fetch("http://localhost:3000/posts");
  posts.value = await data.json();
}

export async function addPost(data: any) {
  await fetch("http://localhost:3000/post", {
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
  await fetch("http://localhost:3000/deletePost", {
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
