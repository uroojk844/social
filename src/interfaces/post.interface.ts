import { Id } from "../../convex/_generated/dataModel";

export type PostType = "text" | "image" | "video";

export interface Post {
  _id: Id<"posts">;
  userID: Id<"users">;
  type: PostType | string;
  data: {
    text?: string;
    images?: string[];
    video?: string;
  };
  likes?: Id<"users">[];
  views?: number;
  _creationTime: number;
}
