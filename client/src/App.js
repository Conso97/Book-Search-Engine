import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log('graphQLErrors', graphQLErrors);
  }
  if (networkError) {
    alert(networkError);
    console.log('networkError', networkError);
  }
});

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: process.env.SERVER_URI || 'http://localhost:3000/graphql',
  onError: (e) => { console.log(e) },
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const link = ApolloLink.from([errorLink, authLink, httpLink]);

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: link,
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
       <>
         <Navbar />
         <Switch>
           <Route exact path='/' component={SearchBooks} />
           <Route exact path='/saved' component={SavedBooks} />
           <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
         </Switch>
       </>
      </Router>
    </ApolloProvider>
  );
}


export default App;
