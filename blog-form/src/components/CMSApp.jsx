import { useState } from "react";

export default function BlogCMS() {
  const [blogs, setBlogs] = useState([]);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");

  const [editedContent, setEditedContent] = useState({
    title: "",
    content: "",
  });

  function createBlog(e) {
    e.preventDefault();
    const newBlog = { title: blogTitle, content: blogContent };
    setBlogs([...blogs, newBlog]);

    setBlogTitle("");
    setBlogContent("");
  }

  function updateBlog(e, blogToUpdate) {
    e.preventDefault();
    const index = blogs.indexOf(blogToUpdate);
    const updatedBlogs = [...blogs];
    updatedBlogs[index] = editedContent;
    setBlogs(updatedBlogs);

    setEditedContent({ title: "", content: "" });
  }

  function deleteBlog(blogToDelete) {
    const index = blogs.findIndex((blog) => blog.title === blogToDelete.title);
    const updatedBlogs = [...blogs];
    updatedBlogs.splice(index, 1);
    setBlogs(updatedBlogs);
  }

  return (
    <>
      <div>
        <h1>Blog posts</h1>
      </div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={(e) => createBlog(e)}
      >
        <input
          type="text"
          value={blogTitle}
          placeholder="Title..."
          onChange={(e) => setBlogTitle(e.target.value)}
        />
        <textarea
          type="text"
          cols="30"
          rows="10"
          value={blogContent}
          placeholder="Content..."
          onChange={(e) => setBlogContent(e.target.value)}
        ></textarea>
        <input type="submit" value="Submit" />
      </form>

      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            {/* <button onClick={showUpdateForm}>Update</button> */}
            {
              <form onSubmit={(e) => updateBlog(e, blog)}>
                <input
                  type="text"
                  name="title"
                  value={editedContent.title}
                  placeholder="Update title..."
                  onChange={(e) =>
                    setEditedContent({
                      ...editedContent,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
                <textarea
                  type="text"
                  cols="30"
                  rows="10"
                  name="content"
                  value={editedContent.content}
                  placeholder="Update content..."
                  onChange={(e) =>
                    setEditedContent({
                      ...editedContent,
                      [e.target.name]: e.target.value,
                    })
                  }
                >
                  hello
                </textarea>
                <input type="submit" value="Update" />
                <button onClick={deleteBlog}>Delete</button>
              </form>
            }
          </li>
        ))}
      </ul>
    </>
  );
}
