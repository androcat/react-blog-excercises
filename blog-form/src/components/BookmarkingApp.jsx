import { useState } from "react";

export default function BookmarkingApp() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [tag, setTag] = useState("");
  const [bookmarkList, setBookmarkList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  function addToBookmarks(event) {
    event.preventDefault();

    const bookmarkItem = { title: title, url: url, tag: tag };
    setBookmarkList([...bookmarkList, bookmarkItem]);

    setTitle("");
    setUrl("");
    setTag("");
  }

  function filter(tag) {
    setFilteredList(bookmarkList.filter((bookmark) => bookmark.tag === tag));
  }

  return (
    <>
      <h1>Bookmarking App</h1>
      <form onSubmit={addToBookmarks}>
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
      <ul>
        {bookmarkList.map((bookmark, index) => (
          <li key={index}>
            <a href={bookmark.url}>{bookmark.title}</a>
            <button onClick={() => filter(bookmark.tag)}>{bookmark.tag}</button>
          </li>
        ))}
      </ul>
      <h2>Filtered Tags</h2>
      <ul>
        {filteredList.map((filteredItem, index) => (
          <li key={index}>
            <a href={filteredItem.url}>{filteredItem.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
