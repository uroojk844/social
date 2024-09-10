import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Id } from "./_generated/dataModel";

export const getUsers = query({
  args: {},
  handler: (ctx) => {
    return ctx.db.query("users").collect();
  },
});

export const getUser = query({
  args: { id: v.id("users")  },
  handler: (ctx, args) => {
    return ctx.db.get(args.id);
  },
});

export const getUserByEmail = query({
  args: { email: v.string() },
  handler: (ctx, args) => {
    return ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .first();
  },
});

export const addUser = mutation({
  args: {
    user: v.object({
      name: v.string(),
      email: v.string(),
      picture: v.optional(v.string()),
    }),
  },
  handler: async (ctx, args) => {
    const data = await getUserByEmail(ctx, { email: args.user.email });
    if (data == null) {
      return ctx.db.insert("users", args.user);
    } else {
      return data._id as Id<"users">;
    }
  },
});
