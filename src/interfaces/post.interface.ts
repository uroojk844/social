export type PostType = "text" | "image" | "video";

export interface Post {
  _id: string;
  userid: {
    _id: string;
    name: string;
  };
  type: PostType;
  data: {
    text: string;
    images: String[];
    video: String[];
  };
  likes: string[];
  comments: string[];
  views: string;
  createdAt: string;
  updatedAt: string;
}
