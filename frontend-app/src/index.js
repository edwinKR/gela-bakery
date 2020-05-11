import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Component class that allows access to the redux store
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import storeFunc from './redux/store';

// GraphQL implementation by creating Apollo Client
// gql: Function for parsing the querty string into a querty document.
import { ApolloClient, gql } from 'apollo-boost';
// Connect Apollo Client to React
import { ApolloProvider } from 'react-apollo';

// Following are part of the 'apollo-boost' bundled package.
// Apollo Link for remote data HTTP fetching:
//  Connects client to /graphql endpoint. The http link is a terminating link that fetches GraphQL results from a GraphQL endpoint over an http connection. The http link supports both POST and GET requests with the ability to change the http options on a per query basis.
import { createHttpLink, HttpLink } from 'apollo-link-http';
// Apollo Client uses a normalized, in-memory cache to dramatically speed up the execution of queries that don't rely on real-time data.
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './App';
import * as serviceWorker from './serviceWorker';

import { typeDefs, resolvers } from './graphql-client/resolvers';

const { store, persistor } = storeFunc();

// Initializing the graphql endpoint link
const link = new createHttpLink({
  uri: 'https://us-central1-jela-bakery-db.cloudfunctions.net/graphql',
});

// Initializing the cache
const cache = new InMemoryCache();

// Initializing Apollo client
const client = new ApolloClient({
  link,
  cache,
  onError: (e) => {
    console.log(e);
  },
  typeDefs,
  resolvers,
});

// Testing initially if Apollo client is able to query from server.
// client
//   .query({
//     query: gql`
//       {
//         categories {
//           id
//           category
//           items {
//             id
//             name
//             price
//           }
//         }
//       }
//     `,
//   })
//   .then((res) => console.log(res));

// Utilizing the 'cache' defined above. Cache will act like a localStorage.
client.writeData({
  data: {
    cartHidden: true,
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
