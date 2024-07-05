import { isReactive, reactive } from "vue";

export const posts = reactive([
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
]);

export function likePost(id: Number) {
  posts.find((post) => post.id == id).isLiked = true;
}
