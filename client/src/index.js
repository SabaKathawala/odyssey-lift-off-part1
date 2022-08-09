import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    // options go here

    // specify the location of our GraphQL server
    uri: 'http://localhost:4000',

    // Every instance of ApolloClient uses an in-memory cache.
    // This enables it to store and reuse query results so it doesn't have to make as many network requests.
    // This makes our app's user experience feel much snappier.
    cache: new InMemoryCache(),
});

ReactDOM.render(
/** he ApolloProvider component uses React's Context API to make a configured Apollo Client instance available throughout a React component tree.
 To use it, we wrap our app's top-level components in the ApolloProvider component and pass it our client instance as a prop: */
  <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
