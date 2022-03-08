import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import client from './utils/apolloClient';
import { UserContextProvider } from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
