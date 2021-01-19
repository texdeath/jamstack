import { GetStaticProps } from "next";
import { Blogs, ContentPageStaticProps } from "../types/api/Blogs";

const Home = ({ blogs }: ContentPageStaticProps) => {
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <p>{blog.title}</p>
        </div>
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
    .catch(() => null);
  return {
    props: {
      blogs: data.contents,
    },
  };
};

export default Home;
