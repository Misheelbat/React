const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGODB_URI;

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { authMiddleware } = require('./utils/auth');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

mongoose
  .connect(url)
  .then(() => {
    console.log('mongodb connected');
    return server.listen({ port: 4000 });
  })
  .then(res => {
    console.log(`Server ready at ${res.url}`);
  })
  .catch(err => {
    console.log('error connecting to MongoDB', err.message);
  });
