import React from "react";
import { useQuery } from "@apollo/client";
import { GetBooks } from "../queries";

const BookList = (props) => {
  const response = useQuery(GetBooks, {
    options: () => {
      return { variables: { id: props.bookId } };
    },
  });

  const handleDisplay = () => {
    if (response.loading) {
      return <div>Loading</div>;
    } else {
      return response.data.books.map((book) => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  };
  return (
    <div>
      <ul id="book-list">{handleDisplay()}</ul>
    </div>
  );
};

export default BookList;
