import React from "react";
import AddBook from "./components/AddBook";
import "./App.css";
import BookList from "./components/BookList";

const App = () => {
  return (
    <div id="main">
      <BookList />
      <AddBook />
    </div>
  );
};

export default App;
