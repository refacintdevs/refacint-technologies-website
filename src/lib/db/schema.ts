import {
  pgTable,
  text,
  varchar,
  timestamp,
  boolean,
  primaryKey,
  integer,
} from "drizzle-orm/pg-core";
import type { AdapterAccount } from "next-auth/adapters";

// ============================================================================
// POSTS
// ============================================================================
export const posts = pgTable("posts", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  slug: varchar("slug", { length: 200 }).notNull().unique(),
  title: varchar("title", { length: 300 }).notNull(),
  excerpt: text("excerpt").notNull().default(""),
  content: text("content").notNull(),
  category: varchar("category", { length: 100 }).notNull().default("General"),
  date: varchar("date", { length: 20 }).notNull(),
  readTime: varchar("read_time", { length: 50 }).notNull().default("5 min read"),
  gradient: varchar("gradient", { length: 200 }).default("from-blue-500 to-cyan-500"),
  coverImage: text("cover_image"),
  authorId: text("author_id").references(() => users.id, { onDelete: "set null" }),
  authorName: varchar("author_name", { length: 200 }).default("Refacint Team"),
  published: boolean("published").notNull().default(true),
  pushedAt: timestamp("pushed_at", { withTimezone: true }),
  pushCount: integer("push_count").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

// ============================================================================
// USERS
// ============================================================================
export const users = pgTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  email: text("email").notNull().unique(),
  emailVerified: timestamp("email_verified", { mode: "date", withTimezone: true }),
  image: text("image"),
  passwordHash: text("password_hash"),
  role: varchar("role", { length: 20 }).notNull().default("admin"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

// ============================================================================
// Auth.js required tables (kept for adapter type compatibility)
// Credentials-only auth means these stay empty — that's fine.
// ============================================================================
export const accounts = pgTable(
  "accounts",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("provider_account_id").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => [
    primaryKey({ columns: [account.provider, account.providerAccountId] }),
  ]
);

export const sessions = pgTable("sessions", {
  sessionToken: text("session_token").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date", withTimezone: true }).notNull(),
});

export const verificationTokens = pgTable(
  "verification_tokens",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date", withTimezone: true }).notNull(),
  },
  (vt) => [primaryKey({ columns: [vt.identifier, vt.token] })]
);

// ============================================================================
// PUSH SUBSCRIPTIONS
// ============================================================================
export const pushSubscriptions = pgTable("push_subscriptions", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  endpoint: text("endpoint").notNull().unique(),
  subscriptionJson: text("subscription_json").notNull(),
  userAgent: text("user_agent"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  lastPushedAt: timestamp("last_pushed_at", { withTimezone: true }),
  disabledAt: timestamp("disabled_at", { withTimezone: true }),
});

// ============================================================================
// Types
// ============================================================================
export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;
export type User = typeof users.$inferSelect;
export type PushSubscription = typeof pushSubscriptions.$inferSelect;

