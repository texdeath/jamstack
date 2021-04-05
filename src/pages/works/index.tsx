import Link from "next/link";
import { Blogs, ContentPageStaticProps } from "@/types/api/Blogs";
import { convertLocale } from "@/utils/convertLocale";
import { Card } from "@/components/Card";
import { homeStyle } from "@/styles/pages/home";
import { Img, Box } from "@chakra-ui/react";
import { abridgementString } from "@/utils/abridgementString";
import { GetStaticProps } from "next";

/**
 * 記事一覧ページにアクセス時に表示されるコンポーネントです。
 * @param blogs:ブログのAPIデータ
 * /api/v1/works
 */
const Works = ({ blogs }: ContentPageStaticProps) => {
  return (
    <div>
      {blogs.map((blog) => (
        <Card key={blog.id}>
          <Link href="/blogs/[blogId]" as={`/blogs/${blog.id}`}>
            <a>
              <Img loading="lazy" src={blog.thumbnail.url} alt={blog.title} />
              <Box p="6">
                <h3>{blog.title}</h3>
                <p css={homeStyle.description}>
                  {abridgementString(blog.description)}
                </p>
                <div css={homeStyle.time}>
                  <small>
                    更新日：
                    {convertLocale(blog.updatedAt) ??
                      convertLocale(blog.createdAt)}
                  </small>
                </div>
              </Box>
            </a>
          </Link>
        </Card>
      ))}
    </div>
  );
};

/**
 * ブログ記事一覧を取得します。
 * ビルド時にデータをフェッチします。
 */
export const getStaticProps: GetStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY ?? "" },
  };
  const fetchData: Blogs = await fetch(`${process.env.CMS_API_URL}/blogs`, key)
    .then((res) => res.json())
    .catch((error) => {
      throw new Error(error);
    });
  const { contents } = fetchData;
  return {
    props: {
      blogs: contents,
    },
  };
};

export default Works;
