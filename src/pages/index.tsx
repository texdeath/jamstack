import { GetStaticProps } from "next";
import Link from "next/link";
import { Blogs, ContentPageStaticProps } from "@/types/api/Blogs";
import { convertLocale } from "@/utils/convertLocale";
import { Card } from "@/components/Card";
import { homeStyle } from "@/styles/home";
import { Img, Box } from "@chakra-ui/react";

const Home = ({ blogs }: ContentPageStaticProps) => {
  console.log(blogs);
  return (
    <div>
      {blogs.map((blog) => (
        <Card key={blog.id}>
          <Link href="/blogs/[blogId]" as={`/blogs/${blog.id}`}>
            <a>
              <Img loading="lazy" src={blog.thumbnail.url} alt={blog.title} />
              <Box p="6">
                <h3>{blog.title}</h3>
                <div
                  css={homeStyle.content}
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
                <div css={homeStyle.time}>
                  <small>
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

export const getStaticProps: GetStaticProps = async () => {
  const key = {
    headers: { "X-API-KEY": process.env.API_KEY ?? "" },
  };
  const data: Blogs = await fetch(`${process.env.CMS_API_URL}/blogs`, key)
    .then((res) => res.json())
    .catch((error) => {
      throw new Error(error);
    });
  return {
    props: {
      blogs: data.contents,
    },
  };
};

export default Home;
