import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("posts").collect();
  },
});

export const getPost = query({
  args: { id: v.id("posts") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const getUserTextPosts = query({
  args: { userID: v.id("users") },
  handler: async (ctx, args) => {
    return ctx.db
      .query("posts")
      .filter((q) => q.eq(q.field("userID"), args.userID))
      .collect();
  },
});

export const createPost = mutation({
  args: {
    userID: v.id("users"),
    type: v.string(),
    data: v.object({
      text: v.optional(v.string()),
      images: v.optional(v.string()),
      video: v.optional(v.string()),
    }),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("posts", {
      userID: args.userID,
      type: args.type,
      data: args.data,
    });
  },
});

export const likePost = mutation({
  args: { id: v.id("posts"), userId: v.id("users") },
  handler: async (ctx, args) => {
    let { id, userId } = args;
    let post = await ctx.db.get(id);
    if (post?.likes?.includes(userId)) {
      let idx = post.likes.indexOf(userId);
      post?.likes?.splice(idx, 1);
    } else {
      post?.likes?.push(userId);
    }
    return await ctx.db.patch(id, { likes: post?.likes });
  },
});

export const deletePost = mutation({
  args: { id: v.id("posts") },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});

export const editPost = mutation({
  args: { id: v.id("posts"), text: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args.id, { data: { text: args.text } });
  },
});
