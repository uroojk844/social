import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    _id: v.id("users"),
    name: v.string(),
    username: v.string(),
    email: v.string(),
    password: v.optional(v.string()),
    picture: v.string(),
  }),
  posts: defineTable({
    userID: v.id("users"),
    type: v.string(),
    data: v.object({
      text: v.optional(v.string()),
      images: v.optional(v.string()),
      video: v.optional(v.string()),
    }),
    likes: v.optional(v.array(v.id("users"))),
  }),
});
