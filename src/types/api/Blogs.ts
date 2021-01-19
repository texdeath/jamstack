/**
 * ブログ記事の型定義です。
 */
export type Blogs = {
  contents: Blog[];
};

export type Blog = {
  id: string;
  title: string;
  content: string;
  thumbnail: { url: string };
  createdAt: string;
  updatedAt?: string;
};

export type ContentPageStaticProps = {
  blogs: Blog[];
};
