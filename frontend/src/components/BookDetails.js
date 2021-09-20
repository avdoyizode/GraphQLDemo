import { useQuery } from "@apollo/client";
import { GetBook } from "../queries";

const BookDetails = (props) => {
  const respose = useQuery(GetBook, {
    options: (props) => {
      return { variables: { id: props.bookId.selected } };
    },
  });

  console.log(props.bookId.selected, respose);
  return (
    <div id="book-details">
      <p>Output book details here</p>
    </div>
  );
};

export default BookDetails;
