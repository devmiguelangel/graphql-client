import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { ApolloProvider } from 'react-apollo';


const client = new ApolloClient({
  uri: '/api',
})

client.
  query({
    query: gql`
      {
        courses {
          titles
          description
          professor {
            name
            nationality
            gender
          }
        }
      }
    `
  })
  .then(result => {
    console.log(result);
  });

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
, document.getElementById('root'));
registerServiceWorker();
