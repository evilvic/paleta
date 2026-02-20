import { query, mutation } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    const comments = await ctx.db.query("comments").order("desc").collect();
    const withDetails = await Promise.all(
      comments.map(async (comment) => {
        const author = await ctx.db.get(comment.authorId);
        const project = await ctx.db.get(comment.projectId);
        return { ...comment, author, project };
      })
    );
    return withDetails;
  },
});

export const create = mutation({
  args: {
    content: v.string(),
    projectId: v.id("projects"),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) throw new Error("Not authenticated");
    return await ctx.db.insert("comments", {
      content: args.content,
      projectId: args.projectId,
      authorId: userId,
    });
  },
});
