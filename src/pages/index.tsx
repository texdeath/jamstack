import { GetStaticProps } from 'next';

const Home = ({ blogs }) => {
    return (
        <div>
            {blogs.map(blog => (<p>{blog.title}</p>))}
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const key = {
        headers: {'X-API-KEY': "7c9cd8b7-5b08-4e3e-870d-1f40e0a2b7e3"},
    };
    const data = await fetch("https://texdeath.microcms.io/api/v1/blogs", key)
        .then(res => res.json())
        .catch(() => null);
    return {
        props: {
            blogs: data.contents,
        },
    };
};

export default Home;