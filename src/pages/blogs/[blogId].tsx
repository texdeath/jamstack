import { useRouter } from "next/router";

/**
 * 記事を表示するコンポーネントです。
 */
const Blog = () => {
  const router = useRouter();
  const { blogId } = router.query;
  return <div>{blogId}</div>;
};

export default Blog;
