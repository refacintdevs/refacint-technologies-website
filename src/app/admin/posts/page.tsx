import Link from "next/link";
import { getAllPosts } from "@/lib/blog/posts";

export const dynamic = "force-dynamic";

export default async function AdminPostsList() {
  const posts = await getAllPosts({ includeDrafts: true });

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground">Posts</h1>
          <p className="mt-1 text-sm text-muted-foreground">{posts.length} total</p>
        </div>
        <Link
          href="/admin/posts/new"
          className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          New Post
        </Link>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr className="text-left">
              <th className="px-4 py-3 font-semibold">Title</th>
              <th className="px-4 py-3 font-semibold">Category</th>
              <th className="px-4 py-3 font-semibold">Date</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                  No posts yet. Create your first one.
                </td>
              </tr>
            )}
            {posts.map((p) => (
              <tr key={p.slug} className="border-t border-border">
                <td className="px-4 py-3 font-medium text-foreground">{p.title}</td>
                <td className="px-4 py-3 text-muted-foreground">{p.category}</td>
                <td className="px-4 py-3 text-muted-foreground">{p.date}</td>
                <td className="px-4 py-3">
                  {p.published === false ? (
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">Draft</span>
                  ) : (
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">Published</span>
                  )}
                </td>
                <td className="px-4 py-3 text-right">
                  <Link href={`/admin/posts/${p.slug}/edit`} className="text-primary font-semibold hover:underline">Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

