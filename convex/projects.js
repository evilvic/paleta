import { query, mutation } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    const projects = await ctx.db.query("projects").order("desc").collect();
    const withAuthor = await Promise.all(
      projects.map(async (project) => {
        const author = await ctx.db.get(project.authorId);
        return { ...project, author };
      })
    );
    return withAuthor;
  },
});

export const getOne = query({
  args: { id: v.id("projects") },
  handler: async (ctx, { id }) => {
    const project = await ctx.db.get(id);
    if (project === null) return null;
    const author = await ctx.db.get(project.authorId);
    return { ...project, author };
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    photoUrl: v.string(),
    inputs: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) throw new Error("Not authenticated");
    return await ctx.db.insert("projects", {
      title: args.title,
      photoUrl: args.photoUrl,
      inputs: args.inputs,
      authorId: userId,
    });
  },
});

export const remove = mutation({
  args: { id: v.id("projects") },
  handler: async (ctx, { id }) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) throw new Error("Not authenticated");
    const project = await ctx.db.get(id);
    if (project === null) throw new Error("Project not found");
    if (project.authorId !== userId) throw new Error("Not authorized");
    // Delete associated comments
    const comments = await ctx.db
      .query("comments")
      .withIndex("by_project", (q) => q.eq("projectId", id))
      .collect();
    await Promise.all(comments.map((c) => ctx.db.delete(c._id)));
    await ctx.db.delete(id);
  },
});
