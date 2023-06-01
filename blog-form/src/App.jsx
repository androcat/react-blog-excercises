import { useState } from "react";
import "./App.css";
import BlogForm from "./components/BlogForm";
import ContactForm from "./components/ContactForm";
import BlogReadingApp from "./components/BlogReadingApp";
import BookmarkingApp from "./components/BookmarkingApp";
import CMSApp from "./components/CMSApp";

function App() {
  const [tab, setTab] = useState(0);
  let app;

  if (tab === 0) {
    app = <BlogForm />;
  } else if (tab === 1) {
    app = <ContactForm />;
  } else if (tab === 2) {
    app = <BlogReadingApp />;
  } else if (tab === 3) {
    app = <BookmarkingApp />;
  } else if (tab === 4) {
    app = <CMSApp />;
  }

  return (
    <>
      <button onClick={() => setTab(0)}>Blog Form</button>
      <button onClick={() => setTab(1)}>Contact Form</button>
      <button onClick={() => setTab(2)}>Blog Reading App</button>
      <button onClick={() => setTab(3)}>Bookmarking App</button>
      <button onClick={() => setTab(4)}>CMS App</button>

      {app}
    </>
  );
}

export default App;
