# Refacint Blog & Admin — Production Guide

## Stack

- **Next.js 16** (App Router) — frontend + backend, one project, one deployment
- **Neon Postgres** — blog posts, user accounts, auth sessions
- **Drizzle ORM** — type-safe SQL, migrations
- **Auth.js v5** (NextAuth) — email/password + GitHub OAuth for admins
- **bcryptjs** — password hashing
- **Cloudinary** — image uploads, CDN, auto format/quality
- **next/image** — on top of Cloudinary for AVIF/WebP delivery

---

## First-time setup

### 1. Fill in `.env.local`

Copy the template:

```bash
cp .env.local.example .env.local
```

Every key is commented. Fill in values:

- **Neon**: sign up at https://console.neon.tech → create project → copy the **pooled** connection string (has `-pooler` in the host)
- **Auth.js secret**: generate one with `openssl rand -base64 32`
- **GitHub OAuth** (optional but recommended):
  1. https://github.com/settings/developers → New OAuth App
  2. Homepage URL: your `NEXT_PUBLIC_SITE_URL`
  3. Callback URL: `{NEXT_PUBLIC_SITE_URL}/api/auth/callback/github`
  4. Copy client ID + secret
- **Admin GitHub allowlist**: comma-separated GitHub usernames allowed to sign in
- **Admin seed**: email + password for your initial admin. Password must be ≥10 chars.
- **Cloudinary**: sign up → dashboard → copy cloud name, API key, API secret. Set both `CLOUDINARY_CLOUD_NAME` (server) and `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` (client — same value).

### 2. Create the database schema

```bash
npm run db:generate   # Creates SQL migration from schema
npm run db:migrate    # Applies it to Neon
```

Or, during early development, skip generating:

```bash
npm run db:push       # Pushes schema directly (dev only)
```

### 3. Seed your first admin

```bash
npm run seed:admin
```

Reads `ADMIN_SEED_EMAIL`, `ADMIN_SEED_PASSWORD`, `ADMIN_SEED_NAME` from env.
Idempotent — safe to re-run. If the admin exists, it updates their password.

After seeding, you can clear the `ADMIN_SEED_*` vars — the hashed password is in Neon.

### 4. Start dev

```bash
npm run dev
```

Visit http://localhost:3000/admin → sign in.

---

## Admin workflow

### Sign in
- `/admin/login` — email/password, or GitHub OAuth (allowlist-checked)
- Sign out from the admin header

### Write a post
- `/admin/posts/new`
- Fill title, slug auto-generates
- Upload a cover image (optional) — goes to Cloudinary's `refacint/blog` folder
- Insert inline images via the "Upload inline image" button — gets a Markdown snippet inserted at cursor
- Write body in Markdown
- Toggle "Published" (unchecked = draft, hidden from public `/blog`)
- Save

### Edit or delete
- `/admin/posts` → click Edit on any row → Save or Delete

---

## Adding a second admin

**Option 1 — Email/password:**
```bash
# Set these in .env.local (or as one-off env vars)
ADMIN_SEED_EMAIL=second.admin@refacint.com
ADMIN_SEED_PASSWORD=<10+ char password>
ADMIN_SEED_NAME="Second Admin"
npm run seed:admin
```

**Option 2 — GitHub OAuth:**
Add their GitHub username to `ADMIN_GITHUB_USERNAMES`:
```
ADMIN_GITHUB_USERNAMES=adegbite-mohammed,second-admin-username
```
They sign in with GitHub → first signin auto-creates the user row.

---

## Image pipeline

```
Admin uploads → POST /api/upload → Cloudinary (folder: refacint/blog)
             ↘ server signs request with API_SECRET
             ↘ Cloudinary auto-converts: fetch_format=auto, quality=auto
             ↘ returns secure_url
Post saved → coverImage URL stored in Neon
Blog render → next/image wraps the Cloudinary URL
           ↘ sends `width`, `q=auto`, `f=auto` hints
           ↘ Cloudinary serves AVIF to Chrome, WebP to Safari, JPEG elsewhere
Browser caches for 1 year (Cloudinary URLs are content-addressed, never change)
Service worker caches on second visit for offline viewing
```

---

## Useful commands

```bash
npm run db:studio        # Visual DB browser (opens drizzle-kit studio)
npm run db:generate      # Generate migration from schema changes
npm run db:migrate       # Apply pending migrations
npm run db:push          # Push schema without migration files (dev)
npm run seed:admin       # Create/update admin user
```

---

## Production deployment (Vercel)

1. Push to GitHub
2. Import project on Vercel
3. Add env vars in Vercel dashboard (same as `.env.local`, minus the `AUTH_URL` which Vercel sets automatically)
4. `npm run db:migrate` runs as a post-install or one-off step (either via a build hook or locally pointed at production DB)
5. After first deploy, `npm run seed:admin` pointed at production DB to create your admin
6. Submit `https://yourdomain.com/sitemap.xml` to Google Search Console

---

## Upgrading paths later

- **Newsletter**: add `newsletter_subscribers` table, Resend for sending, double-opt-in
- **Push notifications**: VAPID keys + `web-push` + tie subscription to confirmed newsletter subscribers
- **Comments**: add `comments` table + moderation UI in admin
- **Rich-text editor**: swap the Markdown textarea for TipTap

Each of these slots into the existing architecture without restructuring.

