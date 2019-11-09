import React, { Component } from "react";

import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

import Navigator from "./src/Navigator.js";

const client = new ApolloClient({
  link: createHttpLink({
    uri: "https://api.graph.cool/simple/v1/ck2jbdlih6q5o0121afm9gv9q",
  }),
  cache: new InMemoryCache(),
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Navigator />
      </ApolloProvider>
    );
  }
}

// export default createAppContainer(AppNavigator);
