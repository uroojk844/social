import { reactive } from "vue";
import { Post } from "../interfaces/post.interface";

export const posts = reactive<Post[]>([
  {
    id: 1,
    type: "image",
    isLiked: false,
  },
  {
    id: 2,
    type: "text",
    isLiked: false,
  },
  {
    id: 3,
    type: "image",
    isLiked: false,
  },
  {
    id: 4,
    type: "text",
    isLiked: false,
  },
  {
    id: 5,
    type: "video",
    isLiked: false,
  },
  {
    id: 6,
    type: "text",
    isLiked: false,
  },
]);

export function likePost(id: Number) {
  const post = posts.find((post) => post.id == id)!;
  post.isLiked = !post.isLiked;
  console.log(posts);
}
