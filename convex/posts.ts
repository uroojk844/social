import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("posts").collect();
  },
});

export const createPost = mutation({
  args: {
    uid: v.id("users"),
    type: v.string(),
    data: v.object({
      text: v.optional(v.string()),
      images: v.optional(v.string()),
      video: v.optional(v.string()),
    }),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("posts", {
      userID: args.uid,
      type: args.type,
      data: args.data,
    });
  },
});

export const deletePost = mutation({
  args: { id: v.id("posts") },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});
