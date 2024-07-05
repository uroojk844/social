export type PostType = "text" | "image" | "video";

export interface Post {
  id: Number;
  type: PostType;
  isLiked: boolean;
}
