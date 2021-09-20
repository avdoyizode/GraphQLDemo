import React from "react";
import ReactDOM from "react-dom";
import { client } from "./client/client";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
