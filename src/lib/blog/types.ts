export interface PostFrontmatter {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  gradient?: string;
  author?: string;
  published?: boolean;
  coverImage?: string;
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
  html?: string;
}

export interface PostListItem extends PostFrontmatter {
  slug: string;
}

