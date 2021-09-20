import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GetAuthors, addBooks, GetBooks } from "../queries";
const AddBook = () => {
  const responsee = useQuery(GetAuthors);
  const [addbook] = useMutation(addBooks);
  const [value, setValue] = React.useState({
    bookName: "",
    genre: "",
    authorID: "",
  });

  const handlesubmit = (e) => {
    e.preventDefault();
    addbook({
      variables: {
        name: value.bookName,
        genre: value.genre,
        authorId: value.authorID,
      },
      refetchQueries: [{ query: GetBooks }],
    });
  };

  const displayAuthor = () => {
    if (responsee.loading) {
      return <option disabled>Loading authors</option>;
    } else {
      return responsee.data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };
  return (
    <div>
      <form id="add-book" onSubmit={(e) => handlesubmit(e)}>
        <div className="field">
          <label>Book name:</label>
          <input
            type="text"
            value={value.bookName}
            onChange={(e) => setValue({ ...value, bookName: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input
            type="text"
            value={value.genere}
            onChange={(e) => setValue({ ...value, genre: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Author:</label>
          <select
            onChange={(e) => setValue({ ...value, authorID: e.target.value })}
          >
            <option>Select author</option>
            {displayAuthor()}
          </select>
        </div>
        <button>+</button>
      </form>
    </div>
  );
};

export default AddBook;
