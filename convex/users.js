import { query, mutation } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";

export const isUsernameTaken = query({
  args: { username: v.string() },
  handler: async (ctx, { username }) => {
    const existing = await ctx.db
      .query("users")
      .withIndex("username", (q) => q.eq("username", username))
      .first();
    return existing !== null;
  },
});

export const currentUser = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) return null;
    return await ctx.db.get(userId);
  },
});

export const updateProfile = mutation({
  args: {
    username: v.optional(v.string()),
    bio: v.optional(v.string()),
    photoUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) throw new Error("Not authenticated");
    if (args.username) {
      const existing = await ctx.db
        .query("users")
        .withIndex("username", (q) => q.eq("username", args.username))
        .first();
      if (existing && existing._id !== userId) {
        throw new Error("Username already taken");
      }
    }
    await ctx.db.patch(userId, args);
  },
});
