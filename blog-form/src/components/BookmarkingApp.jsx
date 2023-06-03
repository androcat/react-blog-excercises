import { useState } from "react";

export default function BookmarkingApp() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [tag, setTag] = useState("");
  const [bookmarkList, setBookmarkList] = useState([]);

  const [filteredList, setFilteredList] = useState([]);

  const [filter, setFilter] = useState("");

  const tagList = [...new Set(bookmarkList.map((bookmark) => bookmark.tag))];
  const bookmarksHTML = bookmarkList
    .filter((bookmark) => (filter ? bookmark.tag === filter : bookmark))
    .map((bookmark, index) => (
      <li key={index}>
        <a href={bookmark.url}>{bookmark.title}</a>
      </li>
    ));

  function addToBookmarks(event) {
    event.preventDefault();

    const bookmarkItem = { title: title, url: url, tag: tag };
    setBookmarkList([...bookmarkList, bookmarkItem]);

    setTitle("");
    setUrl("");
    setTag("");
  }

  //   function filter(tag) {
  //     setFilteredList(bookmarkList.filter((bookmark) => bookmark.tag === tag));
  //   }

  return (
    <>
      <h1>Bookmarking App</h1>
      <div
        style={{
          backgroundColor: "skyblue",
          padding: "20px",
          width: "300px",
          margin: "0 auto",
        }}
      >
        <form
          onSubmit={addToBookmarks}
          style={{
            backgroundColor: "skyblue",
            display: "flex",
            flexDirection: "column",
            width: "90%",
          }}
        >
          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="url"
            value={url}
            placeholder="URL"
            onChange={(e) => setUrl(e.target.value)}
          />
          <input
            type="text"
            value={tag}
            placeholder="Tag"
            onChange={(e) => setTag(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <button onClick={() => setFilter("")}>All</button>
      {tagList.map((tag, index) => (
        <button key={index} onClick={() => setFilter(tag)}>
          {tag}
        </button>
      ))}

      <ul>{bookmarksHTML}</ul>
    </>
  );
}
