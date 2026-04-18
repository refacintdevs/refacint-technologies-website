/**
 * Seed the first admin user from env vars.
 *
 * Required env vars:
 *   ADMIN_SEED_EMAIL
 *   ADMIN_SEED_PASSWORD
 *   ADMIN_SEED_NAME (optional)
 *
 * Usage: npm run seed:admin
 *
 * Idempotent: if the email already exists, the password and name are updated
 * (useful if you forget the password).
 */
import "dotenv/config";
import bcrypt from "bcryptjs";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import * as schema from "./schema";

async function main() {
  const email = process.env.ADMIN_SEED_EMAIL;
  const password = process.env.ADMIN_SEED_PASSWORD;
  const name = process.env.ADMIN_SEED_NAME || "Admin";

  if (!email || !password) {
    console.error("ERROR: ADMIN_SEED_EMAIL and ADMIN_SEED_PASSWORD must be set in .env.local");
    process.exit(1);
  }
  if (password.length < 10) {
    console.error("ERROR: ADMIN_SEED_PASSWORD must be at least 10 characters");
    process.exit(1);
  }
  if (!process.env.DATABASE_URL) {
    console.error("ERROR: DATABASE_URL is not set");
    process.exit(1);
  }

  const sql = neon(process.env.DATABASE_URL);
  const db = drizzle(sql, { schema });

  const passwordHash = await bcrypt.hash(password, 12);
  const existing = await db.query.users.findFirst({ where: eq(schema.users.email, email) });

  if (existing) {
    await db
      .update(schema.users)
      .set({ passwordHash, name, role: "admin" })
      .where(eq(schema.users.id, existing.id));
    console.log(`Updated existing admin: ${email}`);
  } else {
    await db.insert(schema.users).values({
      email,
      name,
      passwordHash,
      role: "admin",
      emailVerified: new Date(),
    });
    console.log(`Created new admin: ${email}`);
  }

  console.log("Done. You can now sign in at /admin/login");
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});

