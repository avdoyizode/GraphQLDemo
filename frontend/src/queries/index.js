import { gql } from "@apollo/client";
//queries
export const GetBooks = gql`
  {
    books {
      name
      id
    }
  }
`;
export const GetAuthors = gql`
  {
    authors {
      name
    }
  }
`;
export const getBook = gql`
  query GetBook($id: ID) {
    book(id: $id) {
      id
      name
      genre
    }
  }
`;

//mutations

export const addBooks = gql`
  mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
    }
  }
`;

//other queires
// {
//   book(id: "614832961993ed2c2d47ad8f") {
//     id
//     name
//     genre
//     author {
//       name
//     }
//   }
// }
// mutation {
//   addBook(name: "abc123", genre: "any", authorId: "614437e891beaa8ff8ab8ba8") {
//     name
//     genre
//   }
// }
