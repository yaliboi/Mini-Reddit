import { Link } from "react-router-dom";

interface Blog {
  title: string;
  author: string;
  body: string;
  id: number;
}

interface Props {
  blogs: Blog[];
  title?: string;
}

const BlogList = ({ blogs = [], title }: Props) => {
  return (
    <div className="blog-list">
      {title != undefined && blogs.length > 0 && <h2>{title}</h2>}
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
