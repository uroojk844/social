import { v } from "convex/values";
import { query } from "./_generated/server";

export const getUsers = query({
  args: {},
  handler: (ctx) => {
    return ctx.db.query("users").collect();
  },
});

export const getUser = query({
  args: { id: v.id("users") },
  handler: (ctx, args) => {
    return ctx.db.get(args.id);
  },
});