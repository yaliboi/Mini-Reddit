import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [author, setAuthor] = useState<string>("mario");
  const [isPending, setIsPending] = useState<boolean>(false);
  const history = useHistory();

  const handleSubmit = (e: FormEvent) => {
    setIsPending(true);
    e.preventDefault(); // stops the defualt action for submit which is refresh
    const blog = { title, body, author };

    fetch("http://127.0.0.1:5000/blogs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      history.push("/");
      history.go(-1);
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value={"mario"}>mario</option>
          <option value={"yoshi"}>yoshi</option>
        </select>
        {!isPending && <button>submit blog</button>}
        {isPending && <p>Creating new post</p>}
      </form>
    </div>
  );
};

export default Create;
