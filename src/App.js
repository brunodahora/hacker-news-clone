import React from "react";
import { Header } from "components";
import MainContainer from "containers/MainContainer";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apolloClient";
const stories = [{ id: 1, title: "ABC" }, { id: 2, title: "123" }];

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Header />
        <MainContainer />
      </div>
    </ApolloProvider>
  );
};

export default App;
