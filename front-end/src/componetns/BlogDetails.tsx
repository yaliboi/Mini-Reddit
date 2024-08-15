import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

interface BlogParams {
  id: string;
}

const BlogDetails = () => {
  const { id } = useParams<BlogParams>();
  const {
    data: blogs,
    error,
    isPending,
  } = useFetch({ url: `http://localhost:3000/api/posts/${id}` });

  const blog = blogs[0];

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
