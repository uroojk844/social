import { reactive } from "vue";
import { Post } from "../interfaces/post.interface";
import { AlertStore } from "./AlertStore";

export let posts = reactive<Post[]>([]);

export function likePost(id: Number) {
  const post = posts.find((post) => post.id == id)!;
  post.isLiked = !post.isLiked;
  console.log(posts);
}

export async function getPosts() {
  const data = await fetch("http://localhost:3000/posts");
  posts.push(...(await data.json()));
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
        posts.unshift(d.success);
        AlertStore.type = "success";
      } else AlertStore.type = "error";
    });
}
