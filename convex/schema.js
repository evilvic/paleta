import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

export default defineSchema({
  ...authTables,
  users: defineTable({
    // Auth fields
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    email: v.optional(v.string()),
    emailVerificationTime: v.optional(v.number()),
    phone: v.optional(v.string()),
    phoneVerificationTime: v.optional(v.number()),
    isAnonymous: v.optional(v.boolean()),
    // Custom fields
    username: v.optional(v.string()),
    bio: v.optional(v.string()),
    photoUrl: v.optional(v.string()),
  })
    .index("email", ["email"])
    .index("phone", ["phone"])
    .index("username", ["username"]),

  projects: defineTable({
    title: v.string(),
    authorId: v.id("users"),
    photoUrl: v.string(),
    inputs: v.array(v.string()),
  }).index("by_author", ["authorId"]),

  comments: defineTable({
    content: v.string(),
    authorId: v.id("users"),
    projectId: v.id("projects"),
  }).index("by_project", ["projectId"]),
});
