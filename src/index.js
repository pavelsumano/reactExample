import React from 'react';
import ReactDom from 'react-dom';
import { App } from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'https://petgram-api-sumanoop.now.sh/graphql'
})

ReactDom.render(
  <ApolloProvider client={client}>
          <App />
  </ApolloProvider>,
  document.getElementById('app')
)
