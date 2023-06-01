import { useState } from "react";

export default function BlogForm() {
  const INITIAL_DATA = [
    {
      title: "My Cat",
      content:
        "Cats go for world domination really likes hummus tweeting a baseball eat an easter feather as if it were a bird then burp victoriously, but tender i'm bored inside, let me out i'm lonely outside, let me in i can't make up my mind whether to go in or out, guess i'll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?! leap into the air in greatest offense!",
    },
  ];

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [blogList, setBlogList] = useState([]);

  function addToBlogList(event) {
    event.preventDefault();
    const blogItem = { title: title, content: content };
    setBlogList([...blogList, blogItem]);

    setTitle("");
    setContent("");
  }
  // console.log({ blogList });
  return (
    <>
      <h1>Blog Form</h1>
      <form onSubmit={addToBlogList}>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          placeholder="Blog content"
          cols="30"
          rows="10"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <ul style={{ textAlign: "left", listStyle: "none" }}>
        {blogList.map((blogItem, index) => (
          <li key={index}>
            <h2>{blogItem.title}</h2>
            <p>{blogItem.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
