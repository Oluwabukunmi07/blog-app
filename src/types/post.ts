export interface Post {
  id: string;
  title: string;
  slug: string | null;
  content: string;
  excerpt: string | null;
  featuredImage: string | null;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  category: string | null;
  tags: string | null;
  viewCount: number;
  publishedAt: string | null;
  isDefault: boolean | null;
  author: string | null;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface PostsResponse {
  data: Post[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}
