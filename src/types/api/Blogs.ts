/**
 * ブログ記事の型定義です。
 */
export type Blogs = {
  contents: Blog[];
};

type Blog = {
  id: string;
  title: string;
};

export type ContentPageStaticProps = {
  blogs: Blog[];
};
